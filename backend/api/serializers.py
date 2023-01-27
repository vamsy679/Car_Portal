from rest_framework import serializers
from .models import CarData


class CarDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarData
        fields = '__all__'
        read_only_fields = ['user']
