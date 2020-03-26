from rest_framework import viewsets
from .models import camara
from .serializer import camaraSerializer

class camaraViewSets(viewsets.ModelViewSet):
    queryset = camara.objects.all()
    serializer_class = camaraSerializer