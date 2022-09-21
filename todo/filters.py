from django_filters import rest_framework as filters
from .models import Project, Todo


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']


class TodoFilter(filters.FilterSet):
    after_date = filters.DateFilter(field_name="created_at", lookup_expr='gte')
    before_date = filters.DateFilter(field_name="created_at", lookup_expr='lte')

    class Meta:
        model = Todo
        fields = ['project']
