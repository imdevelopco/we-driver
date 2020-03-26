from .models import camara
from rest_framework import serializers

class camaraSerializer(serializers.ModelSerializer):
    class Meta:
        model = camara
        fields = '__all__'