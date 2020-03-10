from django.db import models

# Create your models here.
class Album(models.Model):
    # Django already created unique ID
    User_ID = models.ForeignKey('user.User', on_delete=models.CASCADE)
    Description = models.CharField(max_length=250, default=None, blank=True, null=True)
    Name = models.CharField(max_length=80)
    Cover_image = models.URLField(max_length=128, unique=True, blank=True)
    Count = models.SmallIntegerField(default=0)
    Text = models.CharField(max_length=250)
    Time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Name