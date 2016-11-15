import unittest
from django.test import TestCase
from rest_framework import permissions
from authentication.models import AccountManager
from authentication.permissions import IsAccountManager

class AccountManagerTestCase(TestCase):
    def test_email_istrue(self):
        self.assertTrue(create_user(self, 'user@email.com', , **kwargs), True)
        self.assertFalse(create_user(self, 'xyz', , **kwargs), False)
        
 """                        
class IsAccountManagerTestCase(TestCase):
     def test_has_object_permission(self):
        self.assertFalse(has_object_permission(self, ..
 """
        
        
