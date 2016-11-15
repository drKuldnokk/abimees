from django.test import TestCase
from authentication.models import Account
from authentication.models import AccountManager

from rest_framework import permissions
from authentication.permissions import IsAccountOwner

class AccountTestCase(TestCase):
    def setUp(self):
        Account.objects.create(email='user@email.com', username='user')
    
    # Arne
    def test_user_created(self):
        account = Account.objects.get(username='user')
        self.assertEqual(account.email, 'user@email.com')
        self.assertEqual(account.username, 'user')