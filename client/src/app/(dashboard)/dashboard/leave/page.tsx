import LeaveHandling from '@/components/dashboard/leave/LeaveHandling'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Leave = () => {
    return (
        <div className='w-full px-6 flex flex-col items-start justify-center'>
{/* 
            <h2 className='text-3xl font-semibold'>Leave</h2>
            <div className='w-full flex justify-between items-center'>
                <div></div>
                <Link href={'/'}>
                    <Button className=''>
                        <PlusCircle />
                        <span>Add leave</span>
                    </Button>
                </Link>
            </div> */}
            <LeaveHandling />
        </div>
    )
}

export default Leave