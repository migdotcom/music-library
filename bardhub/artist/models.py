from django.db import models

# Create your models here.
class Artist(models.Model):
    # Django already created unique ID
    #Album_ID = models.ForeignKey('album.Album', on_delete=models.CASCADE, blank=True, null=True)
    User = models.OneToOneField('user.User', on_delete=models.CASCADE, default=None, blank=True, null=True)
    Event = models.ManyToManyField('event.Event', blank=True)
    RecordLabel = models.ForeignKey('recordLabel.RecordLabel', on_delete=models.CASCADE, default=None, blank=True, null=True)
    Time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "secret information"

