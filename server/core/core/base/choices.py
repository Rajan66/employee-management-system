from django.db import models


class AttendanceChoices(models.TextChoices):
    PRESENT = "PRESENT"
    ABSENT = "ABSENT"
    HALF_DAY = "HALF_DAY"
    LEAVE = "LEAVE"
    HOLIDAY = "HOLIDAY"


class SalaryPaymentStatus(models.TextChoices):
    PENDING = "PENDING"
    PAID = "PAID"
    FAILED = "FAILED"

