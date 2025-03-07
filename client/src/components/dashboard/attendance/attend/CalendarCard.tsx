import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dispatch, SetStateAction } from 'react';

interface CalendarCardProps {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}

const CalendarCard = ({ date, setDate }: CalendarCardProps) => {
  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate); // Only update if selectedDate is defined
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly View</CardTitle>
        <CardDescription>View attendance by date</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect} // Use the handler
            className="rounded-md border"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarCard;