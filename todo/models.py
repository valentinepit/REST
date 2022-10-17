from django.db import models

from authapp.models import User


class Project(models.Model):
    name = models.CharField(max_length=128)
    users = models.ManyToManyField(User)
    repository = models.URLField(verbose_name="Репозиторий", blank=True)


class Todo(models.Model):
    text = models.TextField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

