from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CarDataSerializer

from .models import CarData
# Create your views here.
from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCars(request):
    user = request.user
    cardata = CarData.objects.filter(user=user).order_by('-id')
    serializer = CarDataSerializer(cardata, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addCars(request):
    user = request.user
    serializer = CarDataSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=user)

    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteCar(request, pk):
    car = CarData.objects.get(id=pk)
    car.delete()
    return Response('Item succsesfully delete!')
