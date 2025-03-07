import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface TodaySummaryProps {
  present: number;
  absent: number;
  late: number;
}

const TodaySummary = ({ present, absent, late }: TodaySummaryProps) => {
  const total = present + absent + late;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Summary</CardTitle>
        <CardDescription>Attendance overview for today</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Present:</span>
            <div className="flex items-center">
              <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: `${(present / total) * 100}%` }}></div>
              </div>
              <span className="text-sm">{Math.round((present / total) * 100)}% ({present})</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Absent:</span>
            <div className="flex items-center">
              <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                <div className="h-2 bg-red-500 rounded-full" style={{ width: `${(absent / total) * 100}%` }}></div>
              </div>
              <span className="text-sm">{Math.round((absent / total) * 100)}% ({absent})</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Late:</span>
            <div className="flex items-center">
              <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                <div className="h-2 bg-yellow-500 rounded-full" style={{ width: `${(late / total) * 100}%` }}></div>
              </div>
              <span className="text-sm">{Math.round((late / total) * 100)}% ({late})</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodaySummary;