from django.contrib import admin
from employees.models import Employee, Salary, SalaryPayment

# Register your models here.
admin.site.register(Employee)
admin.site.register(Salary)
admin.site.register(SalaryPayment)
