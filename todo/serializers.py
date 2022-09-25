from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer

from todo.models import Project, Todo


class ProjectModelSerializer(ModelSerializer):

    class Meta:
        model = Project
        fields = "__all__"


class TodoModelSerializer(ModelSerializer):

    class Meta:
        model = Todo
        fields = "__all__"
