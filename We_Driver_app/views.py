from rest_framework import viewsets
from .models import camara,estacion
from .serializer import camaraSerializer,estacionSerializer


class camaraViewset(viewsets.ModelViewSet):
    queryset = camara.objects.all()
    serializer_class = camaraSerializer
    


class estacionViewset(viewsets.ModelViewSet):
    queryset = estacion.objects.all()
    serializer_class = estacionSerializer
<<<<<<< HEAD
    
=======
<<<<<<< HEAD
"""
    @action(detail=True,method=['put'])    
    def estacion(self,request,pk=None)
"""
=======
    
>>>>>>> 089fef43e1e1d65752d869ed98a0c3fe035b769d
>>>>>>> actualizacion
