import React from 'react'
import { employeeDepartment } from './list/employeeDepartmentList'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
const EmployeeDepartment = () => {
  return (
    <>
        <Card>
          <CardHeader>
            <CardTitle>Employees by Department</CardTitle>
          </CardHeader>
          <CardContent>
            {employeeDepartment.employeesByDepartment.map((dept, index) => (
              <div key={index} className="flex items-center mb-2">
                <span className="flex-grow">{dept.department}</span>
                <div className="w-48 bg-gray-200 dark:bg-gray-800 rounded-full h-2.5 mr-2">
                  <div 
                    className="bg-orange-500 dark:bg-yellow-800 h-2.5 rounded-full" 
                    style={{width: `${(dept.employees / 120) * 100}%`}}
                  ></div>
                </div>
                <span>{dept.employees}</span>
              </div>
            ))}
          </CardContent>
        </Card>
    </>
  )
}

export default EmployeeDepartment