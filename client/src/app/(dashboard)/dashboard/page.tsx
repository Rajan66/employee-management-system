import React from 'react';
import RecentClockIn from '@/components/dashboard/home/RecentClockIn';
import AdminWelcome from '@/components/dashboard/home/AdminWelcome';
import QuickStats from '@/components/dashboard/home/QuickStats';
import EmployeeStatus from '@/components/dashboard/home/EmployeeStatus';
import AttendanceOverview from '@/components/dashboard/home/AttendanceOverview';
import EmployeeDepartment from '@/components/dashboard/home/EmployeeDepartment';

const AdminDashboard = () => {
  return (
    <main className="px-4 min-h-screen space-y-6">
      <section>
        <AdminWelcome />
        <QuickStats />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EmployeeStatus />
        <AttendanceOverview />
        <EmployeeDepartment />
      </section>

      <section>
        <RecentClockIn />
      </section>
    </main>
  );
};

export default AdminDashboard;
