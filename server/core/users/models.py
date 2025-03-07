from django.db import models
from core.base.choices import RoleChoices
from core.base.models import BaseModel


class Role(BaseModel):
    title = models.CharField(max_length=20,choices=RoleChoices,default=RoleChoices.EMPLOYEE)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title
