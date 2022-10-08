from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view

from authapp.views import UserListViewSet
from todo.views import ProjectModelViewSet, TodoModelViewSet

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

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

    path('api/<str:version>/users/', UserListViewSet.as_view()),
    path('openapi/', get_schema_view(title='Server Monitoring API',), name='openapi-schema')
]
