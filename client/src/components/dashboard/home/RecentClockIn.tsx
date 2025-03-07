import ListCard from "@/components/common/ListCard"
import UserAvatar from "@/components/common/UserAvatar"
import { recentlyAttended } from "./list/recentClockIns"

const RecentClockIn = () => {
  return (
    <ListCard 
      title="Recent Clock-In"
      items={recentlyAttended.recentClockIns}
      renderItem={(employee) => (
        <div key={employee.id} className="flex items-center justify-between">
          <UserAvatar src={employee.avatar} name={employee.name} role={employee.role} />
          <span className="text-green-500 font-medium">{employee.status}</span>
        </div>
      )}
    />
  )
}

export default RecentClockIn;
