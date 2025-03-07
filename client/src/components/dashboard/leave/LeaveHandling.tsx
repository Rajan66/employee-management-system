'use client'
import { useState } from "react";
import { LeaveRequest } from "./leavetypes/types";
import { LeaveRequestTable } from "./LeaveRequestTable";
import { LeaveDialog } from "./LeaveDialog";


const LeaveHandling: React.FC = () => {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
    { id: 1, employeeName: "John Doe", leaveType: "Sick Leave", startDate: "2025-03-10", endDate: "2025-03-12", reason: "Flu symptoms", status: "pending" },
    { id: 2, employeeName: "Jane Smith", leaveType: "Vacation", startDate: "2025-04-01", endDate: "2025-04-10", reason: "Family vacation", status: "approved" },
    { id: 3, employeeName: "Mike Johnson", leaveType: "Personal Leave", startDate: "2025-03-15", endDate: "2025-03-16", reason: "Personal matters", status: "rejected" },
    { id: 4, employeeName: "Joe Doe", leaveType: "Sick Leave", startDate: "2025-03-10", endDate: "2025-03-12", reason: "Fever symptoms", status: "pending" },
  ]);
  
  const [selectedRequest, setSelectedRequest] = useState<{ id: number; status: "approved" | "rejected" } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAction = (id: number, status: "approved" | "rejected") => {
    setLeaveRequests((prev) => prev.map((req) => req.id === id ? { ...req, status } : req));
    setIsDialogOpen(false);
  };

  const openConfirmationDialog = (id: number, status: "approved" | "rejected") => {
    setSelectedRequest({ id, status });
    setIsDialogOpen(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <LeaveRequestTable leaveRequests={leaveRequests} openConfirmationDialog={openConfirmationDialog} />
      <LeaveDialog isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} selectedRequest={selectedRequest} handleAction={handleAction} />
    </div>
  );
};

export default LeaveHandling;
