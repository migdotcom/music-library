# Generated by Django 3.0.3 on 2020-03-21 07:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0008_remove_user_playlist_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='Artist',
        ),
    ]
