from django.contrib.auth.models import User
from rest_framework import viewsets

from users.models import Role
from users.serializers import RoleSerializer, UserSerializer


class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
