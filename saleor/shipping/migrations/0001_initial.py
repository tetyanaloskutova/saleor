# Generated by Django 2.1.5 on 2019-03-25 16:36

from django.db import migrations, models
import django.db.models.deletion
import django_countries.fields
import django_measurement.models
import django_prices.models
import saleor.core.weight


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ShippingMethod',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('type', models.CharField(choices=[('price', 'Price based shipping'), ('weight', 'Weight based shipping')], max_length=30)),
                ('price', django_prices.models.MoneyField(currency='USD', decimal_places=2, default=0, max_digits=12)),
                ('minimum_order_price', django_prices.models.MoneyField(blank=True, currency='USD', decimal_places=2, default=0, max_digits=12, null=True)),
                ('maximum_order_price', django_prices.models.MoneyField(blank=True, currency='USD', decimal_places=2, max_digits=12, null=True)),
                ('minimum_order_weight', django_measurement.models.MeasurementField(blank=True, default=saleor.core.weight.zero_weight, measurement_class='Mass', null=True)),
                ('maximum_order_weight', django_measurement.models.MeasurementField(blank=True, measurement_class='Mass', null=True)),
            ],
        ),
        migrations.CreateModel(
            name='ShippingMethodTranslation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(max_length=10)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('shipping_method', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='shipping.ShippingMethod')),
            ],
        ),
        migrations.CreateModel(
            name='ShippingZone',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('countries', django_countries.fields.CountryField(blank=True, default=[], max_length=749, multiple=True)),
                ('default', models.BooleanField(default=False)),
            ],
            options={
                'permissions': (('manage_shipping', 'Manage shipping.'),),
            },
        ),
        migrations.AddField(
            model_name='shippingmethod',
            name='shipping_zone',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shipping_methods', to='shipping.ShippingZone'),
        ),
        migrations.AlterUniqueTogether(
            name='shippingmethodtranslation',
            unique_together={('language_code', 'shipping_method')},
        ),
    ]
