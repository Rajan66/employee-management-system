from django.db import models
from tables.team.models import Team

# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=30)
    team = models.OneToOneField(Team, on_delete=models.CASCADE)  # One team works on one project????. 
    description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=[
        ('PLANNED', 'Planned'),
        ('IN_PROGRESS', 'In Progress'),
        ('ON_HOLD', 'On Hold'),
        ('COMPLETED', 'Completed'),
        ('CANCELLED', 'Cancelled')
    ], default='PLANNED')
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True) 

    def __str__(self):
        return self.name
