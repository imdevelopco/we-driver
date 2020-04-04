from rest_framework import routers
from .viewsets import camaraViewSets,estacionViewSets,usuarioViewSets

router = routers.SimpleRouter()
router.register('camara',camaraViewSets)
router.register('estacion',estacionViewSets)
router.register('usuario',usuarioViewSets)
urlpatterns = router.urls
