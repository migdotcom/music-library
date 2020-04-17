from rest_framework import routers
from .api import UserViewSet, AddFollower, CheatFollowers, UserTotalPlaycount, UserUpdate
from django.urls import path

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')
router.register('api/users-update', UserUpdate, 'userUpdate')

urlpatterns = router.urls + [path('api/users_followers', AddFollower.as_view()),
							 path('api/users_followers/cheat', CheatFollowers.as_view()),
							 path('api/userTotalPlaycount', UserTotalPlaycount.as_view())]

