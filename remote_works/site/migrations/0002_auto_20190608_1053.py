# Generated by Django 2.1.5 on 2019-06-08 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sitesettings',
            name='default_weight_unit',
            field=models.CharField(choices=[('HR', 'HR'), ('IDD', 'IDD'), ('YEAR', 'YEAR')], default='HR', max_length=10),
        ),
    ]
