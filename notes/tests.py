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

    def test_factory_get_list(self):
        factory = APIRequestFactory()
        request = factory.get(self.url)
        view = UserCustomViewSet.as_view({"get": "list"})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_client_get_detail(self):
        client = APIClient()
        response = client.get(f"{self.url}{self.user.id}/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def tearDown(self):
        pass


class TestProjects(APITestCase):

    def setUp(self):
        self.url = "/api/projects/"
        self.user_dict = {"username": "JohnDoe", "first_name": "John", "last_name": "Doe", "email": "mail@mail.com"}
        self.user_new = {"username": "JaneDoe", "first_name": "Jane", "last_name": "Doe", "email": "jane@mail.com"}
        self.user = User.objects.create_user(**self.user_dict)
        self.project_dict = {"name": "Bla-bla-bla",  "repository": "mail.mail.com"}
        self.project_fake = {"name": "Fake",  "repository": "deepfake.mail.com"}
        self.project = Project.objects.create(**self.project_dict)

        self.project.users.add(self.user)
        self.todo_dict = {
            "text": "text",
            "is_active": False
        }
        self.format = "json"
        self.username = "user_admin"
        self.password = "adminpassword"
        self.admin = User.objects.create_superuser(username=self.username, password=self.password)

    def test_testcase_get_list(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_mixer(self):
        user = mixer.blend(User)
        self.client.force_login(user=self.admin)
        response = self.client.put(f"/api/users/{user.id}/", self.user_new)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        user.refresh_from_db()
        self.assertEqual(user.first_name, self.user_new.get("first_name"))

    def tearDown(self):
        pass
