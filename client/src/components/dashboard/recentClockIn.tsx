import Image from "next/image";
import { recentlyAttended } from "./list/recentClockIns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const RecentClockIn = () => {
  return (
    <div>
        <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent Clock-In</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentlyAttended.recentClockIns.map((employee, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image 
                    src={employee.avatar} 
                    alt={employee.name} 
                    className="rounded-full w-10 h-10"
                  />
                  <div>
                    <p className="font-medium">{employee.name}</p>
                    <p className="text-gray-500 text-sm">{employee.role}</p>
                  </div>
                </div>
                <span className="text-green-500 font-medium">{employee.status}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default RecentClockIn