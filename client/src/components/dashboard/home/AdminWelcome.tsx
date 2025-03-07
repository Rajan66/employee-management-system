
import UserAvatar from "@/components/common/UserAvatar"
import { Button } from '@/components/ui/button'
import { Calendar, UserPlus } from 'lucide-react'
import { adminHeader } from './list/adminHeader'

const AdminWelcome = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
      <UserAvatar 
        src={adminHeader.user.avatar} 
        name={adminHeader.user.name} 
        role={adminHeader.user.role} 
      />
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0">
        <Button variant="ghost">
          <Calendar className="mr-2 h-5 w-5" /> Add Schedule
        </Button>
        <Button>
          <UserPlus className="mr-2 h-5 w-5" /> Add Requisition
        </Button>
      </div>
    </div>
  )
}

export default AdminWelcome;
