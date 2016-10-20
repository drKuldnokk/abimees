from django.test import TestCase
from authentication.models import Account

class AccountTestCase(TestCase):
    def setUp(self):
        Account.objects.create(email='user@email.com', username='user')
    
    def test_user_created(self):
        account = Account.objects.get(username='user')
        self.assertEqual(account.email, 'user@email.com')
        self.assertEqual(account.username, 'user')