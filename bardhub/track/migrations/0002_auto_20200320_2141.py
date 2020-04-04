# Generated by Django 3.0.3 on 2020-03-21 03:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tag', '0002_remove_tag_track_id'),
        ('album', '0003_auto_20200320_2141'),
        ('track', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='track',
            name='Tags',
        ),
        migrations.AddField(
            model_name='track',
            name='Tag',
            field=models.OneToOneField(blank=True, default=None, max_length=250, null=True, on_delete=django.db.models.deletion.CASCADE, to='tag.Tag'),
        ),
        migrations.AlterField(
            model_name='track',
            name='Album_ID',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='album.Album'),
        ),
        migrations.AlterField(
            model_name='track',
            name='Artist_note',
            field=models.CharField(blank=True, default=None, max_length=255, null=True),
        ),
    ]
