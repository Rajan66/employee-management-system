import StatCard from "@/components/common/StatCard"
import { Clock } from 'lucide-react';
import { attendateList } from './list/attendanceList'

const AttendanceOverview = () => {
  const stats = [
    { label: "Present", value: `${attendateList.attendanceOverview.present} (${Math.round((attendateList.attendanceOverview.present / attendateList.attendanceOverview.total) * 100)}%)`, color: "text-green-500" },
    { label: "Absent", value: `${attendateList.attendanceOverview.absent} (${Math.round((attendateList.attendanceOverview.absent / attendateList.attendanceOverview.total) * 100)}%)`, color: "text-red-600" },
  ]

  return(
      <StatCard title="Attendance Overview" icon={<Clock className="h-6 w-6" />} stats={stats} />
  )
}

export default AttendanceOverview;
