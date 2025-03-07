'use client';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import SummaryCards from './attend/SummaryCards';
import TodaySummary from './attend/TodaySummary';
import CalendarCard from './attend/CalendarCard';
import EmployeeTable from './attend/EmployeeTable';
import DepartmentTable from './attend/DepartmentTable';
import { CalendarIcon } from 'lucide-react';


const employeesData = [
  { id: 1, name: 'John Doe', status: 'Present', timeIn: '09:00 AM', timeOut: '05:30 PM', department: 'Engineering' },
  { id: 2, name: 'Jane Smith', status: 'Late', timeIn: '09:45 AM', timeOut: '05:15 PM', department: 'Marketing' },
  { id: 3, name: 'Robert Johnson', status: 'Absent', timeIn: '-', timeOut: '-', department: 'Finance' },
  { id: 4, name: 'Emily Brown', status: 'Present', timeIn: '08:45 AM', timeOut: '05:00 PM', department: 'HR' },
  { id: 5, name: 'Michael Wilson', status: 'Present', timeIn: '09:05 AM', timeOut: '05:20 PM', department: 'Engineering' }
];

const departmentSummary = [
  { department: 'Engineering', total: 18, present: 16, absent: 1, late: 1 },
  { department: 'Marketing', total: 12, present: 10, absent: 1, late: 1 },
  { department: 'Finance', total: 10, present: 9, absent: 1, late: 0 },
  { department: 'HR', total: 6, present: 5, absent: 0, late: 1 },
  { department: 'Sales', total: 4, present: 2, absent: 1, late: 1 }
];

const AttendanceDashComp = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Attendance Dashboard</h1>
        <Button variant="default" size="sm">
          <CalendarIcon className="mr-2 h-4 w-4" />
          Today
        </Button>
      </div>

      <SummaryCards
        totalEmployees={50}
        presentToday={42}
        absentToday={4}
        lateToday={4}
      />

      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TodaySummary present={42} absent={4} late={4} />
            <CalendarCard date={date} setDate={setDate} />
          </div>
        </TabsContent>

        <TabsContent value="employees" className="space-y-4">
          <EmployeeTable employees={employeesData} />
        </TabsContent>

        <TabsContent value="departments" className="space-y-4">
          <DepartmentTable departments={departmentSummary} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendanceDashComp;