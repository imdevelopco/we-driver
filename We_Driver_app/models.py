from django.db import models

# Create your models here.
class camara(models.Model):
    id = models.AutoField(primary_key=True)
    ubicacion = models.CharField(max_length=100)
    fecha_registro = models.DateField(auto_now=True)
    tipo_camara = models.IntegerField(default=0,blank=True, null=True)

class estacion(models.Model):
    id = models.AutoField(primary_key=True)
    ubicacion = models.CharField(max_length=100)
    fecha_registro = models.DateField(auto_now=True)
    precio_galon = models.IntegerField(default=0,blank=True, null=True)

class usuario(models.Model):
    email = models.EmailField(primary_key=True)
    nombre = models.TextField(null=False)
    password = models.TextField(null=False)