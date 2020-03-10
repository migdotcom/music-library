from django.db import models

# Create your models here.

class User(models.Model):
    # Django already created unique ID
    Email = models.CharField(max_length=80)
    Password = models.CharField(max_length=80)
    Bio = models.CharField(max_length=250, default=None, blank=True, null=True)
    Artist_trigger = models.SmallIntegerField(default = 0)
    Followers = models.SmallIntegerField(default=0)
    Image = models.CharField(max_length=250)
    Display_name = models.CharField(max_length=80)
    Time_stamp = models.DateTimeField(auto_now_add=True)
    Playlist_ID = models.ForeignKey('playlist.Playlist', on_delete=models.CASCADE, null=True, blank=True)
    # add this later, need Music_player_id table
    # Music_Player_ID = models.ForeignKey()

    def __str__(self):
        return self.Email + " --- " + self.Display_name