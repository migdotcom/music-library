from rest_framework import routers
from .api import UserViewSet, UserTotalPlaycount

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')
#we don't specify a third argument basename for second router, because we will use default from its queryset attribute
router.register('api/userTotalPlaycount', UserTotalPlaycount, 'userplaycount')
urlpatterns = router.urls
