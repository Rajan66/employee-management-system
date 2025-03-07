import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SummaryCardsProps {
  totalEmployees: number;
  presentToday: number;
  absentToday: number;
  lateToday: number;
}

const SummaryCards = ({ totalEmployees, presentToday, absentToday, lateToday }: SummaryCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Total Employees</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalEmployees}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Present Today</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{presentToday}</div>
          <p className="text-xs text-green-500">{Math.round((presentToday / totalEmployees) * 100)}%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Absent Today</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{absentToday}</div>
          <p className="text-xs text-red-500">{Math.round((absentToday / totalEmployees) * 100)}%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Late Today</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{lateToday}</div>
          <p className="text-xs text-yellow-500">{Math.round((lateToday / totalEmployees) * 100)}%</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCards;