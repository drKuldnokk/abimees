# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_auto_20161020_0012'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='search_word',
            field=models.CharField(default=1, max_length=50, blank=True),
            preserve_default=False,
        ),
    ]
