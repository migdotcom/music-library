# Generated by Django 3.0.4 on 2020-04-16 03:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RecordLabel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(blank=True, default=None, max_length=255, null=True)),
                ('City', models.CharField(max_length=255)),
                ('Video_playlist_Url', models.CharField(blank=True, default=None, max_length=255, null=True)),
                ('Time_stamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
