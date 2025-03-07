from core.base.models import BaseModel
from django.db import models
from django.utils import timezone


class Project(BaseModel):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    team = models.ForeignKey(
        "teams.Team",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="projects",
    )

    def __str__(self):
        return self.name

    def is_active(self):
        return self.end_date is None or self.end_date >= timezone.now().date()
