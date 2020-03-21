from django.db import models

# Create your models here.

class DraftSong(models.Model):
    # Django already created unique ID
    Album = models.ForeignKey('album.Album', on_delete=models.CASCADE, default=None, blank=True, null=True)
    Image = models.CharField(max_length=255, default=None, blank=True, null=True )
    Description = models.CharField(max_length=255, default=None, blank=True, null=True )
    Name = models.CharField(max_length=80, default=None, blank=True, null=True )
    Time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Album + " --- " + self.Name + " --- " +self.Description

