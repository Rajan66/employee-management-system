from core.base.choices import AttendanceChoices, LeaveChoices, SalaryPaymentStatus
from core.base.models import BaseModel
from departments.models import Department
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator
from django.db import models


class Employee(BaseModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="employee")
    department = models.ForeignKey(
        Department,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="employees",
    )
    role = models.ForeignKey(
        "users.Role",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="employees",
    )
    designation = models.CharField(max_length=50, default="Full Stack Developer")
    address = models.CharField(max_length=150, blank=True, default="")
    phone = models.CharField(max_length=10, blank=True, default="")

    def __str__(self):
        return f"{self.user.username} - {self.role.title if self.role else 'No Role'}"


class Salary(BaseModel):
    employee = models.OneToOneField(
        Employee, on_delete=models.CASCADE, related_name="salary"
    )
    base_amount = models.DecimalField(
        max_digits=10, decimal_places=2, validators=[MinValueValidator(0.01)]
    )
    effective_from = models.DateField()
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.employee.user.username} - ${self.base_amount}"


class SalaryPayment(BaseModel):
    salary = models.ForeignKey(
        Salary, on_delete=models.CASCADE, related_name="payments"
    )
    payment_amount = models.DecimalField(
        max_digits=10, decimal_places=2, validators=[MinValueValidator(0.01)]
    )
    payment_date = models.DateField()
    payment_status = models.CharField(
        max_length=20, choices=SalaryPaymentStatus, default=SalaryPaymentStatus.PENDING
    )

    def __str__(self):
        return f"{self.salary.employee.user.username} - {self.payment_amount} {self.payment_status} on {self.payment_date}"


class Attendance(BaseModel):
    employee = models.ForeignKey(
        Employee, on_delete=models.CASCADE, related_name="attendances", null=True
    )
    date = models.DateTimeField()
    check_in_time = models.DateTimeField()
    check_out_time = models.DateTimeField(blank=True, null=True)
    work_hours = models.FloatField(blank=True, null=True)
    status = models.CharField(
        max_length=10, choices=AttendanceChoices, default=AttendanceChoices.PRESENT
    )


class Leave(BaseModel):
    employee = models.ForeignKey(
        Employee, on_delete=models.CASCADE, related_name="leaves", null=True
    )
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    duration = models.FloatField(blank=True, null=True)
    reason = models.TextField(blank=True)
    status = models.CharField(
        max_length=10, choices=LeaveChoices, default=LeaveChoices.PENDING
    )
    approved_by = models.ForeignKey(
        Employee,
        on_delete=models.SET_NULL,
        related_name="managers",
        blank=False,
        null=True,
    )
