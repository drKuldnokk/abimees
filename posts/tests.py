from django.test import TestCase
from posts.models import Post
from authentication.models import Account

class PostTestCase(TestCase):
    
    def test_create(self):
        account = Account.objects.create(email='user@email.com', username='user')
        post = Post.objects.create(author=account, name="nimi", content="sisu", field="valdkond")
        self.assertEqual(post.name, "nimi")
        
    def test_created_at_filled(self):
        account = Account.objects.create(email='user@email.com', username='user')
        post = Post.objects.create(author=account, name="nimi", content="sisu")
        self.assertTrue(post.created_at)
    
    def test_updated_at_filled(self):
        account = Account.objects.create(email='user@email.com', username='user')
        post = Post.objects.create(author=account, name="nimi", content="sisu")
        self.assertTrue(post.updated_at)
    
    def test_unicode(self):
        account = Account.objects.create(email='user@email.com', username='user')
        post = Post.objects.create(author=account, name="nimi", content="sisu")
        self.assertEqual(post.__unicode__(), 'sisu')