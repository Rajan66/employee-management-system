from rest_framework import viewsets
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated

from teams.models import Team
from teams.serializers import TeamSerializer


class TeamViewSet(viewsets.ModelViewSet):
    serializer_class = TeamSerializer
    queryset = Team.objects.all()
    filter_backends = [OrderingFilter, SearchFilter]
    pagination_class = PageNumberPagination
    permission_classes = [IsAuthenticated]
