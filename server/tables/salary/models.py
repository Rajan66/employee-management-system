from django.db import models
from django.core.validators import MinValueValidator
from tables.employee.models import Employee

# Create your models here.
class Salary(models.Model):
    PAYMENT_STATUS = [
        ('PAID', 'Paid'),
        ('PENDING', 'Pending'),
        ('CANCELLED', 'Cancelled')
    ]

    PAYMENT_METHOD = [
        ('BANK_TRANSFER', 'Bank Transfer'),
        ('CASH', 'Cash'),
        ('CHECK', 'Check'),
        ('DIGITAL_WALLET', 'Digital Wallet')
    ]
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    salary_date = models.DateField()
    payment_period_start = models.DateField() # 1 month sama ko kasari garne ho??
    payment_period_end = models.DateField()
    amount = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0)])
    status = models.CharField(max_length=20, choices=PAYMENT_STATUS, default='PENDING')
    payment_method = models.CharField(max_length=20, choices=PAYMENT_METHOD, default='BANK_TRANSFER')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f'{self.employee} - {self.salary_date} - {self.amount}'
