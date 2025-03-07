import React from 'react';
import { employeeDepartment } from './list/employeeDepartmentList';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EmployeeDepartment = () => {
  const maxEmployees = Math.max(...employeeDepartment.employeesByDepartment.map(dept => dept.employees), 120);

  return (
    <Card className="bg-yellow-50 dark:bg-zinc-950 p-4">
      <CardHeader>
        <CardTitle>Employees by Department</CardTitle>
      </CardHeader>
      <CardContent>
        {employeeDepartment.employeesByDepartment.map((dept, index) => (
          <div key={index} className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">{dept.department}</span>
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5 mx-2">
              <div 
                className="bg-orange-500 dark:bg-yellow-800 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(dept.employees / maxEmployees) * 100}%` }}
                aria-label={`${dept.employees} employees in ${dept.department}`}
              />
            </div>
            <span className="text-sm">{dept.employees}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default EmployeeDepartment;
