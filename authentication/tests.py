from django.test import TestCase
from authentication.models import Account
from authentication.models import AccountManager

class AccountTestCase(TestCase):
    def setUp(self):
        Account.objects.create(email='user@email.com', username='user')
    
    def test_user_created(self):
        account = Account.objects.get(username='user')
        self.assertEqual(account.email, 'user@email.com')
        self.assertEqual(account.username, 'user')

    def test_get_full_name(self):
        Account.objects.create(first_name='esimene', last_name='teine')
        self.assertEqual(get_full_name(self), 'esimene teine')

    def test_get_short_name(self):
        Account.objects.create(first_name='esimene')
        self.assertEqual(get_short_name(self), 'esimene')
        
