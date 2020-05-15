from .models import camara,estacion
from rest_framework import serializers

class camaraSerializer(serializers.ModelSerializer):
    class Meta:
        model = camara
        fields = '__all__'

class estacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = estacion
        fields = '__all__'
