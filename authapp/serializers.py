from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer

from authapp.models import User


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email',)


class UserModelSerializerWide(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', "is_superuser", "is_staff")
