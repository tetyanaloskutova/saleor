# Generated by Django 2.1.5 on 2019-06-08 08:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('delivery', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='deliverymethod',
            name='maximum_task_weight',
        ),
        migrations.RemoveField(
            model_name='deliverymethod',
            name='minimum_task_weight',
        ),
    ]
