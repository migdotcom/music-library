from django.db import models

# Create your models here.
class Event(models.Model):
    # Django already created unique ID
    #Album_ID = models.ForeignKey('album.Album', on_delete=models.CASCADE, blank=True, null=True)
    Location = models.CharField(max_length=255)
    Time_happening = models.TimeField(auto_now_add=False)
    Time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Location
