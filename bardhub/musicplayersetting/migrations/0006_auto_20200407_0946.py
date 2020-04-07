# Generated by Django 3.0.4 on 2020-04-07 14:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('track', '0004_track_name'),
        ('musicplayersetting', '0005_auto_20200404_1626'),
    ]

    operations = [
        migrations.AlterField(
            model_name='musicplayersetting',
            name='Track',
            field=models.OneToOneField(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='track.Track'),
        ),
    ]
