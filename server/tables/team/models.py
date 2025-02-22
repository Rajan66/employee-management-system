from django.utils import timezone
from django.db import models
from tables.department.models import Department

# Create your models here.

class Team(models.Model):
    TEAM_STATUS = [
        ('ACTIVE', 'Active'),
        ('INACTIVE', 'Inactive'),
        ('DISSOLVED', 'Dissolved')
    ]
    name = models.CharField(max_length=100)
    department = models.ForeignKey(Department, on_delete=models.CASCADE) # idk milxa ki mildaina vanera
    description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=TEAM_STATUS, default='ACTIVE') #Team lead/ manager??
    formation_date = models.DateField(default=timezone.now)
    dissolved_date = models.DateField(null=True, blank=True)
    maximum_members = models.PositiveIntegerField(default=15)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
