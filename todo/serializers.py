from rest_framework import serializers
from rest_framework.serializers import HyperlinkedModelSerializer

from todo.models import Project, Todo


class ProjectModelSerializer(serializers.HyperlinkedModelSerializer):
    # users = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = "__all__"


class TodoModelSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Todo
        fields = "__all__"
