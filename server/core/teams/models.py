from django.db import models
from employees.models import Employee
from departments.models import Department
from core.base.models import BaseModel


class Team(BaseModel):
    name = models.CharField(max_length=255, unique=True)
    department = models.ForeignKey(
        Department, on_delete=models.CASCADE, related_name="teams"
    )
    lead = models.ForeignKey(
        Employee, on_delete=models.SET_NULL, null=True, blank=True, related_name="leading_teams"
    )
    members = models.ManyToManyField(
        Employee, related_name="teams", blank=True
    )

    def __str__(self):
        return f"{self.name} ({self.department.name})"
