from django.db import models

# Create your models here.

class User(models.Model):
    # Django already created unique ID
    Email = models.CharField(max_length=255)
    Password = models.CharField(max_length=255)
    Bio = models.CharField(max_length=255, default=None, blank=True, null=True)
    Artist_trigger = models.IntegerField(default = 0)
    Followers = models.IntegerField(default=0)
    Image = models.CharField(max_length=255, default=None, blank=True, null=True )
    Display_name = models.CharField(max_length=80)
    Time_stamp = models.DateTimeField(auto_now_add=True)
    Music_player = models.OneToOneField('musicplayersetting.MusicPlayerSetting', on_delete=models.CASCADE, default=None, blank=True, null=True)

    def __str__(self):
        return self.Email + " --- " + self.Display_name