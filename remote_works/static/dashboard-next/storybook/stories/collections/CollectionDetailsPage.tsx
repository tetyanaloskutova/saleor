import { Omit } from "@material-ui/core";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import * as placeholderCollectionImage from "../../../../images/block1.jpg";
import * as placeholderSkillImage from "../../../../images/placeholder60x60.png";
import CollectionDetailsPage, {
  CollectionDetailsPageProps
} from "../../../collections/components/CollectionDetailsPage";
import { collection as collectionFixture } from "../../../collections/fixtures";
import { pageListProps } from "../../../fixtures";
import Decorator from "../../Decorator";

const collection = collectionFixture(
  placeholderCollectionImage,
  placeholderSkillImage
);

const props: Omit<CollectionDetailsPageProps, "classes"> = {
  ...pageListProps.default,
  collection,
  disabled: false,
  isFeatured: true,
  onBack: () => undefined,
  onCollectionRemove: () => undefined,
  onImageDelete: () => undefined,
  onImageUpload: () => undefined,
  onSkillUnassign: () => undefined,
  onSubmit: () => undefined,
  saveButtonBarState: "default"
};

storiesOf("Views / Collections / Collection details", module)
  .addDecorator(Decorator)
  .add("default", () => <CollectionDetailsPage {...props} />)
  .add("loading", () => (
    <CollectionDetailsPage {...props} collection={undefined} disabled={true} />
  ))
  .add("no skills", () => (
    <CollectionDetailsPage
      {...props}
      collection={{
        ...collection,
        skills: {
          ...collection.skills,
          edges: []
        }
      }}
      disabled={true}
    />
  ));
