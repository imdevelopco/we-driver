from .models import camara,estacion,usuario
from rest_framework import serializers

class camaraSerializer(serializers.ModelSerializer):
    class Meta:
        model = camara
        fields = '__all__'

class estacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = estacion
        fields = '__all__'

class usuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = usuario
        fields = '__all__'