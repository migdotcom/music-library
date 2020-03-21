from django.db import models

# Create your models here.
class MusicPlayerSetting(models.Model):
    # Django already created unique ID
    Last_volume = models.SmallIntegerField();
    Button_size = models.SmallIntegerField();
    Track = models.OneToOneField('track.Track', on_delete=models.CASCADE, default=None, blank=True, null=True)
    Time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Last_volume + " --- " + self.Button_size + " --- " +self.Track