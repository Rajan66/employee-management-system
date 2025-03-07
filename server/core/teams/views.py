from rest_framework import viewsets

from teams.serializers import TeamSerializer
from teams.models import Team

class TeamViewSet(viewsets.ModelViewSet):
    serializer_class = TeamSerializer
    queryset = Team.objects.all()
