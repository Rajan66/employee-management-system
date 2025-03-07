"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EmployeeTable } from "./EmployeeTable"
import { EmployeeDialog } from "./EmployeeDialog"
import type { Employee } from "./lib/schema"

// Dummy employee data
const initialEmployees: Employee[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    department: "Engineering",
    role: "Frontend Developer",
    status: "Active",
    joinDate: "2022-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    department: "Design",
    role: "UI/UX Designer",
    status: "Active",
    joinDate: "2021-11-03",
  },
  {
    id: "3",
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    department: "Marketing",
    role: "Marketing Manager",
    status: "On Leave",
    joinDate: "2020-06-22",
  },
  {
    id: "4",
    name: "Emily Williams",
    email: "emily.williams@example.com",
    department: "HR",
    role: "HR Specialist",
    status: "Active",
    joinDate: "2023-02-10",
  },
  {
    id: "5",
    name: "Robert Brown",
    email: "robert.brown@example.com",
    department: "Engineering",
    role: "Backend Developer",
    status: "Active",
    joinDate: "2022-08-17",
  },
]

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees)
  const [open, setOpen] = useState(false)
  const [currentEmployee, setCurrentEmployee] = useState<Employee | null>(null)

  const handleAddEmployee = (employee: Omit<Employee, "id">) => {
    const newEmployee = {
      ...employee,
      id: Math.random().toString(36).substring(2, 9),
    }
    setEmployees([...employees, newEmployee])
  }

  const handleEditEmployee = (employee: Employee) => {
    setEmployees(employees.map((emp) => (emp.id === employee.id ? employee : emp)))
  }

  const handleDeleteEmployee = (id: string) => {
    setEmployees(employees.filter((employee) => employee.id !== id))
  }

  const openAddDialog = () => {
    setCurrentEmployee(null)
    setOpen(true)
  }

  const openEditDialog = (employee: Employee) => {
    setCurrentEmployee(employee)
    setOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Employees</h1>
        <Button onClick={openAddDialog}>
          <Plus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>
      <EmployeeTable employees={employees} onEdit={openEditDialog} onDelete={handleDeleteEmployee} />
      <EmployeeDialog
        open={open}
        setOpen={setOpen}
        onSubmit={currentEmployee ? handleEditEmployee : handleAddEmployee}
        employee={currentEmployee}
      />
    </div>
  )
}

