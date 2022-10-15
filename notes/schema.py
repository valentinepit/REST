import graphene
from graphene import ObjectType
from graphene_django import DjangoObjectType
from authapp.models import User
from todo.models import Project, Todo


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = "__all__"


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = "__all__"


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = "__all__"


class Query(ObjectType):

    user_by_id = graphene.List(UserType, id=graphene.Int(required=False))

    def resolve_user_by_id(root, info, id=None):
        if id:
            return User.objects.get(id=id)
        return User.objects.all()

    projects_by_user = graphene.List(ProjectType, first_name=graphene.String(required=False))

    def resolve_projects_by_user(root, info, first_name=None):
        if first_name:
            return Project.objects.filter(users__first_name=first_name).all()
        return Project.objects.all()

    todo_by_user = graphene.List(TodoType, first_name=graphene.String(required=False))

    def resolve_todo_by_user(root, info, first_name=None):
        if first_name:
            return Todo.objects.filter(user__first_name=first_name).all()
        return Todo.objects.all()

    todo_by_project = graphene.List(TodoType, id=graphene.Int(required=False))

    def resolve_todo_by_project(root, info, id=None):
        if id:
            return Todo.objects.filter(project__id=id).all()
        return Todo.objects.all()

    users_by_project = graphene.List(UserType, id=graphene.Int(required=False))

    def resolve_users_by_project(root, info, id=None):
        if id:
            return User.objects.filter(project__id=id).all()
        return User.objects.all()

    users_all = graphene.List(UserType)
    projects_all = graphene.List(ProjectType)
    todo_all = graphene.List(TodoType)

    def resolve_users_all(root, info):
        return User.objects.all()

    def resolve_todo_all(root, info):
        return Todo.objects.all()

    def resolve_projects_all(root, info):
        return Project.objects.all()


schema = graphene.Schema(query=Query)
