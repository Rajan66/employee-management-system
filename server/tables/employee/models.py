from django.db import models

from tables.department.models import Department
from tables.team.models import Team

# Create your models here.

class Employee(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other')
    ]
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    address = models.TextField(blank=True, null=True)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    phone_number = models.CharField(max_length=10)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)  #Many employee one department..
    hire_date = models.DateField() #Congratulation... Omedeto...
    team = models.ForeignKey(Team, on_delete=models.CASCADE)  #Many employee one team???
    role = models.CharField(max_length=100)  # k garne thaha chaina malai tch tch ?? positions?
    salary = models.DecimalField(max_digits=10, decimal_places=2) # employee ko salary sanga connection ko no idea..tara salary model ma employee taneko xa..
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
