# Generated by Django 3.0.4 on 2020-04-15 01:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('track', '0001_initial'),
        ('musicplayersetting', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='musicplayersetting',
            name='Track',
            field=models.OneToOneField(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='track.Track'),
        ),
    ]
