# Generated by Django 5.1.6 on 2025-03-06 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_role_created_at_role_updated_at_alter_role_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='role',
            name='title',
            field=models.CharField(choices=[('ADMIN', 'Admin'), ('MANAGER', 'Manager'), ('EMPLOYEE', 'Employee'), ('HR', 'HR')], default='EMPLOYEE', max_length=20),
        ),
    ]
