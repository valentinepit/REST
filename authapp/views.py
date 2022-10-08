from rest_framework.generics import ListCreateAPIView
from .serializers import UserModelSerializer, UserModelSerializerWide
from .models import User


class UserListViewSet(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

    def get_serializer_class(self):
        if self.request.version == "v2":
            return UserModelSerializerWide
        return UserModelSerializer



