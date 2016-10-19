# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='field',
            field=models.CharField(default=datetime.datetime(2016, 10, 19, 21, 12, 14, 847000, tzinfo=utc), max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='location',
            field=models.CharField(default=datetime.datetime(2016, 10, 19, 21, 12, 26, 969000, tzinfo=utc), max_length=50, blank=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='name',
            field=models.CharField(default=datetime.datetime(2016, 10, 19, 21, 12, 31, 671000, tzinfo=utc), max_length=50),
            preserve_default=False,
        ),
    ]
