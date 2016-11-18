from django.db import models
from scrapyd_api import ScrapydAPI

from authentication.models import Account

class Post(models.Model):
    author = models.ForeignKey(Account)
    name = models.CharField(max_length=50)
    search_word = models.CharField(max_length=50, blank=True)
    field = models.CharField(max_length=50)
    location = models.CharField(max_length=50, blank=True)
    content = models.TextField()
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __unicode__(self):
        return '{0}'.format(self.content)
    
    def propose_to_providers(self):
        if self.search_word != "":
            scrapyd = ScrapydAPI('http://localhost:7556')
            scrapyd.schedule(
                'kratt', 
                'providers', 
                search_word=self.search_word, 
                location=self.location
            )