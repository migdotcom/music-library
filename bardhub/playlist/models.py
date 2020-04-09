from django.db import models

# Create your models here.
class Playlist(models.Model):
    # Django already created unique ID
    User = models.ManyToManyField('user.User', blank=True)
    Playlist_image = models.CharField(max_length=255, default=None, blank=True, null=True )
    Name = models.CharField(max_length=80)
    Description = models.CharField(max_length=255, default=None, blank=True, null=True)
    Play_count = models.IntegerField(default=0)
    Time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Name