import { House, CalendarCheck, CalendarOff, ChartNoAxesColumnIncreasing } from "lucide-react"
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
        title: "Reports", 
        url: "#",
        icon: ChartNoAxesColumnIncreasing
    },
  ];