from django.test import TestCase

from rest_framework import status
from rest_framework.test import APITestCase, APISimpleTestCase, APIClient, APIRequestFactory, force_authenticate
from mixer.backend.django import mixer
from authapp.models import User
from todo.models import Project, Todo
from authapp.views import UserCustomViewSet

class TestUserCustomViewSet(TestCase):

    def setUp(self):
        self.url = "/api/users/"
        self.user_dict = {"username": "JohnDoe", "first_name": "John", "last_name": "Doe", "email": "mail@mail.com"}
        self.format = "json"
        self.username = "user_admi"
        self.password = "adminpassword"
        self.admin = User.objects.create_superuser(username=self.username, password=self.password)
        self.user = User.objects.create_user(**self.user_dict)

    def test_get_factory_list(self):
        factory = APIRequestFactory()
        request = factory.get(self.url)
        view = UserCustomViewSet.as_view({"get": "list"})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def tearDown(self):
        pass