from rest_framework import viewsets
from .models import camara,estacion,usuario
from .serializer import camaraSerializer,estacionSerializer,usuarioSerializer

class camaraViewSets(viewsets.ModelViewSet):
    queryset = camara.objects.all()
    serializer_class = camaraSerializer

class estacionViewSets(viewsets.ModelViewSet):
    queryset = estacion.objects.all()
    serializer_class = estacionSerializer

class usuarioViewSets(viewsets.ModelViewSet):
    queryset = usuario.objects.all()
    serializer_class = usuarioSerializer