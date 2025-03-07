import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface DepartmentSummary {
  department: string;
  total: number;
  present: number;
  absent: number;
  late: number;
}

interface DepartmentTableProps {
  departments: DepartmentSummary[];
}

const DepartmentTable = ({ departments }: DepartmentTableProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Department Attendance</CardTitle>
        <CardDescription>Attendance breakdown by department</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Department</th>
                <th className="text-left p-4">Total</th>
                <th className="text-left p-4">Present</th>
                <th className="text-left p-4">Absent</th>
                <th className="text-left p-4">Late</th>
                <th className="text-left p-4">Rate</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">{dept.department}</td>
                  <td className="p-4">{dept.total}</td>
                  <td className="p-4 text-green-600">{dept.present}</td>
                  <td className="p-4 text-red-600">{dept.absent}</td>
                  <td className="p-4 text-yellow-600">{dept.late}</td>
                  <td className="p-4">
                    {Math.round((dept.present / dept.total) * 100)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default DepartmentTable;