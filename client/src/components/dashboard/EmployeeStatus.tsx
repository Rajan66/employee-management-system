import { employeeStatusList } from "./list/employeeStatusList"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from 'lucide-react';
const EmployeeStatus = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Users className="mr-2 h-6 w-6" /> Employee Status
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <p>Total Employees: {employeeStatusList.employeeStats.total}</p>
                        <div className="flex justify-between">
                            <span>Full Time: {employeeStatusList.employeeStats.fulltime}</span>
                            <span className="text-green-500">
                                {Math.round((employeeStatusList.employeeStats.fulltime / employeeStatusList.employeeStats.total) * 100)}%
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Contract: {employeeStatusList.employeeStats.contract}</span>
                            <span className="text-blue-500">
                                {Math.round((employeeStatusList.employeeStats.contract / employeeStatusList.employeeStats.total) * 100)}%
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Probation: {employeeStatusList.employeeStats.probation}</span>
                            <span className="text-yellow-500">
                                {Math.round((employeeStatusList.employeeStats.probation / employeeStatusList.employeeStats.total) * 100)}%
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>WFH: {employeeStatusList.employeeStats.wfh}</span>
                            <span className="text-purple-500">
                                {Math.round((employeeStatusList.employeeStats.wfh / employeeStatusList.employeeStats.total) * 100)}%
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default EmployeeStatus