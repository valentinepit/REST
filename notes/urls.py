from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from graphene_django.views import GraphQLView
from rest_framework import permissions
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view

from authapp.views import UserListViewSet
from todo.views import ProjectModelViewSet, TodoModelViewSet

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="ToDo",
        default_version='0.1',
        description="Documentation for our project",
        contact=openapi.Contact(email="admin@admin.local"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

router = DefaultRouter()
# router.register('users', UserListViewSet)
router.register('projects', ProjectModelViewSet),
router.register('todo', TodoModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api-token/', obtain_auth_token),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include(router.urls)),
    path('', TemplateView.as_view(template_name="index.html")),

    path('swagger/', schema_view.with_ui('swagger')),
    path('graphql/', GraphQLView.as_view(graphiql=True)),

    path('api/<str:version>/users/', UserListViewSet.as_view()),
    # path('openapi/', get_schema_view(title='Server Monitoring API', ), name='openapi-schema')
]
