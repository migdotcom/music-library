from django.db import models

# Create your models here.
class track(models.Model):
    # Django already created unique ID
    Album_ID = models.ForeignKey('album.Album', on_delete=models.CASCADE)
    Music_key_type = models.CharField(max_length=80, default=None, blank=True, null=True)
    Lright_type = models.CharField(max_length=80, default=None, blank=True, null=True)
    Artist_note = models.CharField(max_length=250, default=None, blank=True, null=True)
    Tags = models.CharField(max_length=250, default=None, blank=True, null=True)
    Genre = models.CharField(max_length=80)
    Time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Music_key_type + " -- " + self.Lright_type