from django.db import models

# Create your models here.
class camara(models.Model):
    ubicacion = models.CharField(max_length=100)
    fecha_Registro = models.DateField(auto_now=True)