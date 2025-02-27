# Generated by Django 3.0.5 on 2020-04-18 16:53

import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('musicplayersetting', '0002_musicplayersetting_track'),
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('email', models.CharField(max_length=255, unique=True)),
                ('Bio', models.CharField(blank=True, default=None, max_length=255, null=True)),
                ('Artist_trigger', models.IntegerField(default=0)),
                ('Followers', models.IntegerField(default=0)),
                ('Image', models.FileField(default=None, null=True, upload_to='profile_images')),
                ('last_login', models.DateTimeField(auto_now=True)),
                ('username', models.CharField(max_length=80)),
                ('Time_stamp', models.DateTimeField(auto_now_add=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('Music_player', models.OneToOneField(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='musicplayersetting.MusicPlayerSetting')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
    ]
