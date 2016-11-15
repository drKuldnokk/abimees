from django.test import TestCase
from posts.models import Post
from authentication.models import Account

class PostTestCase(TestCase):
    def setUp(self):
        Account.objects.create(email='user@email.com', username='user')
        Post.objects.create(author= Account.objects.get(username='user'), name='nimi', location= '',field='juuksur', content='Otsin juuksurit')
    def test_is_username_author(self):
        author= Account.objects.get(username='user')
        self.assertEqual(author, 'user')
    def max_char_content(self):
        self.assertEqual(len(content) =< 50, True)
    def test_location(self):
        self.assertEqual(location = ' ', True)
    def max_char_field(self):
        self.assertEqual(len(field) =< 50, True)

        
        
