from rest_framework import routers
from .viewsets import camaraViewSets

router = routers.SimpleRouter()
router.register('camara',camaraViewSets)
urlpatterns = router.urls