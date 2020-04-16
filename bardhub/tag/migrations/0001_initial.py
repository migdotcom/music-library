# Generated by Django 3.0.4 on 2020-04-14 20:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Genre', models.CharField(blank=True, default=None, max_length=80, null=True)),
                ('Mood', models.CharField(blank=True, default=None, max_length=80, null=True)),
                ('Instruments', models.CharField(blank=True, default=None, max_length=80, null=True)),
                ('Time_stamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
