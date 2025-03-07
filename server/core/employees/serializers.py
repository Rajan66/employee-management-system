from rest_framework import serializers

from employees.models import Attendance, Employee, Leave, Salary, SalaryPayment


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = "__all__"


class SalarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Salary
        fields = "__all__"


class SalaryPaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalaryPayment
        fields = "__all__"


class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = "__all__"


class LeaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leave
        fields = "__all__"
