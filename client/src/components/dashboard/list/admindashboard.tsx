import { Calendar,  Briefcase,  FileText, CheckCircle} from 'lucide-react';
export const dashboardData = {
    stats: [
      {
        icon: <Calendar className="h-6 w-6 text-orange-500" />,
        title: 'Attendance Deviation',
        value: '120/154',
        percentage: '+4.2%',
        color: 'text-orange-500'
      },
      {
        icon: <Briefcase className="h-6 w-6 text-blue-500" />,
        title: 'Total No. of Projects',
        value: '90/125',
        percentage: '+1.1%',
        color: 'text-blue-500'
      },
      {
        icon: <FileText className="h-6 w-6 text-blue-400" />,
        title: 'Total No. of Clients',
        value: '60/86',
        percentage: '+1.2%',
        color: 'text-blue-400'
      },
      {
        icon: <CheckCircle className="h-6 w-6 text-pink-500" />,
        title: 'Total No. of Tasks',
        value: '25/28',
        percentage: '+1.3%',
        color: 'text-pink-500'
      }
    ],
   
  };
  