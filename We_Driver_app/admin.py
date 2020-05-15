from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from We_Driver_app.models import camara,estacion

admin.site.register(estacion)
admin.site.register(camara)
