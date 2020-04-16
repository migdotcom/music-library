# Generated by Django 3.0.4 on 2020-04-16 03:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('tag', '0001_initial'),
        ('user', '0001_initial'),
        ('album', '0002_album_user'),
        ('playlist', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Track',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(blank=True, default=None, max_length=80, null=True)),
                ('URL', models.CharField(blank=True, default=None, max_length=512, null=True)),
                ('Licensing_rights', models.CharField(blank=True, default=None, max_length=80, null=True)),
                ('Notes', models.CharField(blank=True, default=None, max_length=255, null=True)),
                ('Time_stamp', models.DateTimeField(auto_now_add=True)),
                ('Album', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='album.Album')),
                ('Artist', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='user.User')),
                ('Playlist', models.ManyToManyField(blank=True, to='playlist.Playlist')),
                ('Tag', models.OneToOneField(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='tag.Tag')),
            ],
        ),
    ]
