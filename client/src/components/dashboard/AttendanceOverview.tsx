import React from 'react'
import { attendateList } from './list/attendanceList'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from 'lucide-react';
const AttendanceOverview = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Clock className="mr-2 h-6 w-6" /> Attendance Overview
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <p>Total Attendance: {attendateList.attendanceOverview.total}</p>
                        <div className="flex justify-between">
                            <span>Present</span>
                            <span className="text-green-500">
                                {attendateList.attendanceOverview.present}
                                {` (${Math.round((attendateList.attendanceOverview.present / attendateList.attendanceOverview.total) * 100)}%)`}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Absent</span>
                            <span className="text-red-500">
                                {attendateList.attendanceOverview.absent}
                                {` (${Math.round((attendateList.attendanceOverview.absent / attendateList.attendanceOverview.total) * 100)}%)`}
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default AttendanceOverview