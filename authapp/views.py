from rest_framework import viewsets, mixins

from .serializers import UserModelSerializer
from .models import User


class UserCustomViewSet(mixins.UpdateModelMixin, mixins.ListModelMixin,
                        mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
