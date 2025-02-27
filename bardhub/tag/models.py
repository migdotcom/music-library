from django.db import models

# Create your models here.
class Tag(models.Model):
    # Django already created unique ID
    Genre = models.CharField(max_length=80, default=None, blank=True, null=True)
    Mood = models.CharField(max_length=80, default=None, blank=True, null=True)
    Instruments = models.CharField(max_length=80, default=None, blank=True, null=True)
    Time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Genre + "---" + self.Mood