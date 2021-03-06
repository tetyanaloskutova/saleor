from unittest.mock import Mock

import graphene
import pytest
from django.core.exceptions import ImproperlyConfigured

from remote_works.graphql.core.mutations import BaseMutation
from remote_works.graphql.skill import types as skill_types


class Mutation(BaseMutation):
    name = graphene.Field(graphene.String)

    class Arguments:
        skill_id = graphene.ID(required=True)

    class Meta:
        description = 'Base mutation'

    @classmethod
    def mutate(cls, root, info, skill_id):
        errors = []
        skill = cls.get_node_or_error(
            info, skill_id, errors, 'skill_id', skill_types.Skill)
        if errors:
            return Mutation(errors=errors)
        return Mutation(name=product.name)


class Mutations(graphene.ObjectType):
    test = Mutation.Field()


schema = graphene.Schema(
    mutation=Mutations,
    types=[skill_types.Skill, skill_types.SkillVariant])


def test_mutation_without_description_raises_error():
    with pytest.raises(ImproperlyConfigured) as exc_info:
        class MutationNoDescription(BaseMutation):
            name = graphene.Field(graphene.String)

            class Arguments:
                skill_id = graphene.ID(required=True)


def test_resolve_id(product, schema_context):
    skill_id = graphene.Node.to_global_id('Skill', product.pk)
    query = """
        mutation testMutation($productId: ID!) {
            test(productId: $productId) {
                name
                errors {
                    field
                    message
                }
            }
        }
    """
    variables = {'productId': skill_id}
    result = schema.execute(
        query, variables=variables, context_value=schema_context)
    assert not result.errors
    assert result.data['test']['name'] == product.name


def test_user_error_nonexistent_id(schema_context):
    query = """
        mutation testMutation($productId: ID!) {
            test(productId: $productId) {
                name
                errors {
                    field
                    message
                }
            }
        }
    """
    variables = {'productId': 'not-really'}
    result = schema.execute(
        query, variables=variables, context_value=schema_context)
    assert not result.errors
    user_errors = result.data['test']['errors']
    assert user_errors
    assert user_errors[0]['field'] == 'productId'
    assert "Couldn't resolve to a node" in user_errors[0]['message']


def test_user_error_id_of_different_type(product, schema_context):
    query = """
        mutation testMutation($productId: ID!) {
            test(productId: $productId) {
                name
                errors {
                    field
                    message
                }
            }
        }
    """

    # Test that get_node_or_error checks that the returned ID must be of
    # proper type. Providing correct ID but of different type than expected
    # should result in user error.
    variant = product.variants.first()
    variant_id = graphene.Node.to_global_id('SkillVariant', variant.pk)

    variables = {'productId': variant_id}
    result = schema.execute(
        query, variables=variables, context_value=schema_context)
    assert not result.errors
    user_errors = result.data['test']['errors']
    assert user_errors
    assert user_errors[0]['field'] == 'productId'
    assert user_errors[0]['message'] == 'Must receive a Skill id.'


def test_get_node_or_error_returns_null_for_empty_id():
    errors = []
    info = Mock()
    response = Mutation.get_node_or_error(info, '', errors, '')
    assert not errors
    assert response is None
