from django.contrib.auth.models import User
from rest_framework import serializers

from users.models import Role


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "password",
            "email",
            "is_staff",
            "is_active",
            "last_login",
        ]


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = "__all__"
