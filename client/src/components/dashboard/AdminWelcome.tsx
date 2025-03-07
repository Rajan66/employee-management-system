import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Calendar, UserPlus } from 'lucide-react'
import { adminHeader } from './list/adminHeader'
const AdminWelcome = () => {
  return (
    <div className="flex justify-between items-center mb-6">
    <div className="flex items-center space-x-4">
      <Image 
          src={adminHeader.user.avatar} 
          alt="User Avatar" 
          width={64} 
          height={64} 
          className="rounded-full"
      />
      <div>
        <h2 className="text-2xl font-bold">Welcome Back, {adminHeader.user.name}</h2>
        <p className="text-gray-500">{adminHeader.user.role}</p>
      </div>
    </div>
    <div className="space-x-4">
      <Button variant="outline">
        <Calendar className="mr-2 h-4 w-4" /> Add Schedule
      </Button>
      <Button>
        <UserPlus className="mr-2 h-4 w-4" /> Add Requisition
      </Button>
    </div>
  </div>
  )
}

export default AdminWelcome