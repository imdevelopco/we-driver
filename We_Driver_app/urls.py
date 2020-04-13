from django.urls import path
from .views import camaraList,estacionList

urlpatterns = [
    path('camara/',camaraList.as_view(), name = 'camara_list'),
    path('estacion/',estacionList.as_view(), name = 'estacion_list'),
]