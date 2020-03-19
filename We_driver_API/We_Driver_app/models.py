from django.db import models

# Create your models here.
class camara(models.Model):
    ubicacion = models.CharField(max_length=250)
    fecha_registro = models.DateField(auto_now=True)