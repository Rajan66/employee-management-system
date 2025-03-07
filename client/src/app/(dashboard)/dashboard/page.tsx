// import Table from '@/components/common/Table'
// import SidebarComponent from '@/components/dashboard/Sidebar'
// import React from 'react'

// const page = () => {
//   return (
//     <div> 
//       <Table />  
//       <SidebarComponent />
//     </div>
//   )
// }

// export default page

import React from 'react';
import RecentClockIn from '@/components/dashboard/recentClockIn';
import AdminWelcome from '@/components/dashboard/AdminWelcome';
import QuickStats from '@/components/dashboard/QuickStats';
import EmployeeStatus from '@/components/dashboard/EmployeeStatus';
import AttendanceOverview from '@/components/dashboard/AttendanceOverview';
import EmployeeDepartment from '@/components/dashboard/EmployeeDepartment';
const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-darkNavy min-h-screen">
      <AdminWelcome />
      <QuickStats />

      <div className="grid grid-cols-3 gap-6">
        <EmployeeStatus />
        <AttendanceOverview />
        <EmployeeDepartment />
      </div>
      <RecentClockIn />
    </div>
  );
};

export default AdminDashboard;