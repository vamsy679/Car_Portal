# Generated by Django 4.0.4 on 2022-05-28 15:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_cardata_delete_task'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cardata',
            name='car_model',
        ),
        migrations.RemoveField(
            model_name='cardata',
            name='color',
        ),
        migrations.RemoveField(
            model_name='cardata',
            name='engine_code',
        ),
        migrations.RemoveField(
            model_name='cardata',
            name='fuel_tank_capacity',
        ),
        migrations.RemoveField(
            model_name='cardata',
            name='mileage',
        ),
        migrations.RemoveField(
            model_name='cardata',
            name='registration_date',
        ),
        migrations.RemoveField(
            model_name='cardata',
            name='year_of_manufacture',
        ),
    ]
