from django.core.validators import MinValueValidator
from django.contrib.auth.models import User
from django.db import models

from projects.models import Department
from core.base.models import BaseModel
from core.base.choices import SalaryPaymentStatus


class Employee(BaseModel):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="employee")
    department = models.ForeignKey(
        Department, on_delete=models.SET_NULL, null=True, blank=True, related_name="employees"
    )
    role = models.ForeignKey(
        'users.Role', on_delete=models.SET_NULL, null=True, blank=True, related_name="employees"
    )

    def __str__(self):
        return f"{self.user.username} - {self.role.title if self.role else 'No Role'}"


class Salary(BaseModel):
    employee = models.OneToOneField(
        Employee, on_delete=models.CASCADE, related_name="salary")
    base_amount = models.DecimalField(
        max_digits=10, decimal_places=2, validators=[MinValueValidator(0.01)])
    effective_from = models.DateField()
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.employee.user.username} - ${self.base_amount}"


class SalaryPayment(BaseModel):
    salary = models.ForeignKey(
        Salary, on_delete=models.CASCADE, related_name="payments")
    payment_amount = models.DecimalField(
        max_digits=10, decimal_places=2, validators=[MinValueValidator(0.01)])
    payment_date = models.DateField()
    payment_status = models.CharField(
        max_length=20,
        choices=SalaryPaymentStatus,
        default=SalaryPaymentStatus.PENDING
    )

    def __str__(self):
        return f"{self.salary.employee.user.username} - {self.payment_amount} {self.payment_status} on {self.payment_date}"
