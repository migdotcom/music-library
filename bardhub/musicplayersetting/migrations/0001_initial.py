# Generated by Django 3.0.4 on 2020-04-16 03:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MusicPlayerSetting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Last_volume', models.SmallIntegerField()),
                ('Button_size', models.SmallIntegerField()),
                ('Time_stamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
