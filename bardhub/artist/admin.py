from django.contrib import admin
from .models import Artist
# Register your models here.

admin.site.register(Artist)
admin.site.site_header = 'Bardhub Administration'
