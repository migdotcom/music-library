from rest_framework import routers
from .api import UserViewSet, UserUpdate

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'user')
router.register('api/users-update', UserUpdate, 'userUpdate')


urlpatterns = router.urls
