# Generated by Django 3.0.3 on 2020-03-20 03:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0002_auto_20200310_0119'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='email',
            field=models.EmailField(max_length=500, unique=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='message',
            field=models.CharField(blank=True, max_length=500),
        ),
    ]
