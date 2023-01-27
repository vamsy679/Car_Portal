from django.db import models

# Create your models here.

from django.contrib.auth.models import User


class CarData(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(null=True, max_length=200)
    description = models.TextField(null=True, blank=True)
    car_model = models.CharField(null=True, max_length=200)
    color = models.CharField(null=True, max_length=200)
    year_of_manufacture = models.CharField(null=True, max_length=200)
    fuel_tank_capacity = models.CharField(null=True, max_length=200)
    engine_code = models.CharField(null=True, max_length=200)
    mileage = models.CharField(null=True, max_length=200)
    registration_date = models.CharField(null=True, max_length=200)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
