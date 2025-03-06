from rest_framework import viewsets

from projects.serializers import ProjectSerializer
from projects.models import Project

class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

