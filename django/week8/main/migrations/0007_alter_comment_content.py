# Generated by Django 4.0 on 2021-12-13 22:49

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_post_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='content',
            field=models.TextField(max_length=200, validators=[django.core.validators.MinLengthValidator(10)]),
        ),
    ]
