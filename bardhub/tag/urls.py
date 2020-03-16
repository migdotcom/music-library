from rest_framework import routers
from .api import TagViewSet

router = routers.DefaultRouter()
router.register('api/tags', TagViewSet, 'tags')

urlpatterns = router.urls
