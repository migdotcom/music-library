from django.db import models

# Create your models here.
class Track(models.Model):
	Artist = models.ForeignKey('user.User', on_delete=models.CASCADE, blank=True, null =True)
	Album = models.ForeignKey('album.Album', on_delete=models.CASCADE, blank=True, null=True)
	Name = models.CharField(max_length=80, default=None, blank=True, null=True)
	URL = models.CharField(max_length=512, default=None, blank=True, null=True)
	Playlist = models.ManyToManyField('playlist.Playlist', blank=True)
	Licensing_rights = models.CharField(max_length=80, default=None, blank=True, null=True)
	Notes = models.CharField(max_length=255, default=None, blank=True, null=True)
	Tag = models.OneToOneField('tag.Tag', on_delete=models.CASCADE, default=None, blank=True, null=True)
	Time_stamp = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.Name