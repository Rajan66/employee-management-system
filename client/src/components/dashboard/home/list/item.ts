import { House, CalendarCheck, CalendarOff, ChartNoAxesColumnIncreasing, Users, User } from "lucide-react"
export const sidebarItems = [
    { 
        title: "Home",
        url: "/dashboard",
        icon: House
    },
    { 
        title: "Attendance", 
        url: "/dashboard/attendance",
        icon: CalendarCheck
    },
    { 
        title: "Leave", 
        url: "/dashboard/leave",
        icon: CalendarOff 
    },
    { 
        title: "Teams", 
        url: "/dashboard/team",
        icon: Users
    },
    { 
        title: "Employees", 
        url: "/dashboard/employee",
        icon: User
    },
  ];