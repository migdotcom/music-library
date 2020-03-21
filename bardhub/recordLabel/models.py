from django.db import models

# Create your models here.
class RecordLabel(models.Model):
    # Django already created unique ID
    #Album_ID = models.ForeignKey('album.Album', on_delete=models.CASCADE, blank=True, null=True)
    Name = models.CharField(max_length=255, default=None, blank=True, null=True)
    City = models.CharField(max_length=255)
    Video_playlist_Url = models.CharField(max_length=255, default=None, blank=True, null=True)
    Time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Name + " --- " + self.City

