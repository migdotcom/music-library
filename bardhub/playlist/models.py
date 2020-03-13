from django.db import models

# Create your models here.
class Playlist(models.Model):
    # Django already created unique ID
    Album_ID = models.ForeignKey('album.Album', on_delete=models.CASCADE)
    Track_ID = models.ForeignKey('track.track', on_delete=models.CASCADE)
    Tag_ID = models.ForeignKey('tag.Tag', on_delete=models.CASCADE)
    Playlist_image = models.URLField(max_length=128, unique=True, blank=True)
    Name = models.CharField(max_length=80)
    Description = models.CharField(max_length=250, default=None, blank=True, null=True)
    Play_count = models.SmallIntegerField(default=0)
    Time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Name