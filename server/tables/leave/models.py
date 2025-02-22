from django.db import models
from tables.employee.models import Employee

# Create your models here.

# emum haru arko file ma banauna jhyau lagyo...
class Leave(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    reason = models.CharField(max_length=100, 
        choices=[('Sick', 'Sick'), ('Vacation', 'Vacation'), ('Emergency', 'Emergency'), ('Other', 'Other')]) # k garne ho idk
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=10, 
        choices=[('Pending', 'Pending'), ('Approved', 'Approved'), ('Rejected', 'Rejected')]) # approve or rejected by pani rakhne ki k garne ho
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f'{self.employee} - {self.reason} from {self.start_date} to {self.end_date}'
