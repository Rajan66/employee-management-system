export interface LeaveRequest {
    id: number;
    employeeName: string;
    leaveType: string;
    startDate: string;
    endDate: string;
    reason: string;
    status: "pending" | "approved" | "rejected";
  }
  