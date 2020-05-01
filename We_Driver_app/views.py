from rest_framework import generics
from .models import camara,estacion
from .serializer import camaraSerializer,estacionSerializer


class camaraList(generics.ListCreateAPIView):
    queryset = camara.objects.all()
    serializer_class = camaraSerializer

class estacionList(generics.ListCreateAPIView):
    queryset = estacion.objects.all()
    serializer_class = estacionSerializer


