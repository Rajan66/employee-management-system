from django.contrib import admin

from employees.models import Attendance, Employee, Leave, Salary, SalaryPayment

# Register your models here.
admin.site.register(Employee)
admin.site.register(Salary)
admin.site.register(SalaryPayment)
admin.site.register(Attendance)
admin.site.register(Leave)
