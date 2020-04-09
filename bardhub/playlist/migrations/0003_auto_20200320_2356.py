# Generated by Django 3.0.3 on 2020-03-21 05:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0007_auto_20200320_2356'),
        ('playlist', '0002_auto_20200320_2141'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='playlist',
            name='Track_ID',
        ),
        migrations.AddField(
            model_name='playlist',
            name='User',
            field=models.ManyToManyField(blank=True, to='user.User'),
        ),
    ]
