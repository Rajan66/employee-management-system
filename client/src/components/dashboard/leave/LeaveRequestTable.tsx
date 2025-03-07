'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { formatDate, calculateDuration, getTypeColor } from "./leavetypes/leaveUtils";
import { LeaveRequest } from "./leavetypes/types";

interface LeaveRequestTableProps {
  leaveRequests: LeaveRequest[];
  openConfirmationDialog: (id: number, status: "approved" | "rejected") => void;
}

export const LeaveRequestTable: React.FC<LeaveRequestTableProps> = ({ leaveRequests, openConfirmationDialog }) => (
  <div className="w-full rounded-lg  border border-gray-100">
    <Table className="p-6 w-full">
      <TableHeader className="bg-gray-50 dark:bg-zinc-950">
        <TableRow>
          <TableHead className="font-bold text-lg text-gray-500">Employee</TableHead>
          <TableHead className="font-bold text-lg text-gray-500">Leave Details</TableHead>
          <TableHead className="font-bold text-lg text-gray-500">Status</TableHead>
          <TableHead className="font-bold text-lg text-gray-500 text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaveRequests.map((request) => (
          <TableRow key={request.id} className="hover:bg-gray-50 hover:dark:bg-zinc-950 transition-colors">
            <TableCell className="py-4">
              <div className="font-medium text-gray-900 dark:text-gray-400">{request.employeeName}</div>
            </TableCell>
            <TableCell className="py-4">
              <div className="space-y-1">
                <div className={`text-sm font-medium ${getTypeColor(request.leaveType)}`}>{request.leaveType}</div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-3.5 w-3.5 mr-1" /> 
                  <span>{formatDate(request.startDate)} - {formatDate(request.endDate)}</span>
                  <span className="mx-1">•</span>
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{calculateDuration(request.startDate, request.endDate)} day{calculateDuration(request.startDate, request.endDate) > 1 ? 's' : ''}</span>
                </div>
                <div className="text-sm text-gray-500">{request.reason}</div>
              </div>
            </TableCell>
            <TableCell className="py-4">
              <Badge variant="outline" className={`font-normal capitalize px-2 py-1 text-xs ${request.status === "approved" ? "bg-green-50 text-green-700  dark:bg-zinc-950 dark:border-stone-900 border-green-200" : 
                request.status === "rejected" ? "bg-red-50 dark:bg-stone-950 dark:text-red-50 text-red-700  dark:border-stone-900 border-red-200" : "bg-amber-50 dark:bg-neutral-950 text-amber-700  dark:border-stone-900 border-amber-200"}`}>
                {request.status}
              </Badge>
            </TableCell>
            <TableCell className="py-4 text-right">
              {request.status === "pending" && (
                <div className="flex justify-end space-x-2">
                  <Button onClick={() => openConfirmationDialog(request.id, "approved")} variant="outline" className="bg-transparent hover:bg-green-50 text-green-600 border border-green-200 hover:border-green-300 text-xs py-1 h-8">
                    Approve
                  </Button>
                  <Button onClick={() => openConfirmationDialog(request.id, "rejected")} variant="outline" className="bg-transparent hover:bg-red-50 text-red-600 border border-red-200 hover:border-red-300 text-xs py-1 h-8">
                    Reject
                  </Button>
                </div>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
