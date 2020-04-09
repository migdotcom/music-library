# Generated by Django 3.0.4 on 2020-04-09 15:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('musicplayersetting', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Email', models.CharField(max_length=255)),
                ('Password', models.CharField(max_length=255)),
                ('Bio', models.CharField(blank=True, default=None, max_length=255, null=True)),
                ('Artist_trigger', models.IntegerField(default=0)),
                ('Followers', models.IntegerField(default=0)),
                ('Image', models.CharField(blank=True, default=None, max_length=255, null=True)),
                ('Display_name', models.CharField(max_length=80)),
                ('Time_stamp', models.DateTimeField(auto_now_add=True)),
                ('Music_player', models.OneToOneField(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='musicplayersetting.MusicPlayerSetting')),
            ],
        ),
    ]
