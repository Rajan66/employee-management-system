'use client'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
// import { LeaveRequest } from "../leavecomp/types";

interface LeaveDialogProps {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRequest: { id: number; status: "approved" | "rejected" } | null;
  handleAction: (id: number, status: "approved" | "rejected") => void;
}

export const LeaveDialog: React.FC<LeaveDialogProps> = ({ isDialogOpen, setIsDialogOpen, selectedRequest, handleAction }) => (
  <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <AlertDialogContent className="max-w-sm rounded-lg">
      <AlertDialogHeader>
        <AlertDialogTitle className="text-center">Confirm Action</AlertDialogTitle>
        <AlertDialogDescription className="text-center text-gray-600">
          Are you sure you want to {selectedRequest?.status === "approved" ? "approve" : "reject"} this leave request?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="flex space-x-3 justify-center">
        <AlertDialogCancel className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-800">
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction
          onClick={() => selectedRequest && handleAction(selectedRequest.id, selectedRequest.status)}
          className={selectedRequest?.status === "approved" ? "bg-green-600 hover:bg-green-700 text-white border-none" : "bg-red-600 hover:bg-red-700 text-white border-none"}
        >
          Confirm
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
