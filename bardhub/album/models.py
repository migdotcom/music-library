from django.db import models

# Create your models here.
class Album(models.Model):
    # Django already created unique ID
    User = models.ForeignKey('user.User', on_delete=models.CASCADE, blank=True, null=True)
    Description = models.CharField(max_length=255, default=None, blank=True, null=True)
    Name = models.CharField(max_length=80)
    Cover_image = models.CharField(max_length=255, default=None, blank=True, null=True )
    Count = models.IntegerField(default=0)
    Time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Name