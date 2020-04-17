from django.db import models
from django.contrib.auth.models import AbstractBaseUser, UserManager
from django.contrib.auth.models import PermissionsMixin
# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):
    # Django already created unique ID
    email = models.CharField(max_length=255, unique = True)
    Bio = models.CharField(max_length=255, default=None, blank=True, null=True)
    Artist_trigger = models.IntegerField(default = 0)
    Followers = models.IntegerField(default=0)
    Image = models.CharField(max_length=255, default=None, blank=True, null=True )
    last_login = models.DateTimeField(auto_now=True)
    username = models.CharField(max_length=80)
    Time_stamp = models.DateTimeField(auto_now_add=True)
    Music_player = models.OneToOneField('musicplayersetting.MusicPlayerSetting', on_delete=models.CASCADE, default=None, blank=True, null=True)
    is_staff = models.BooleanField(default = False)
    is_superuser = models.BooleanField(default = False)
    objects = UserManager()
    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    def __str__(self):
        return self.email + " --- " + self.username