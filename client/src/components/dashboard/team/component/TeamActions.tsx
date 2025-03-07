import React from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { Team } from "../types";

interface TeamActionsProps {
  team: Team;
  onEdit: (team: Team) => void;
  onDelete: (id: number) => void;
}

export const TeamActions: React.FC<TeamActionsProps> = ({ 
  team, 
  onEdit, 
  onDelete 
}) => {
  return (
    <div className="flex justify-end gap-2">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => onEdit(team)}
      >
        <Pencil className="w-4 h-4 text-blue-600" />
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        className="border-red-200 hover:bg-red-50 hover:text-red-600"
        onClick={() => onDelete(team.id)}
      >
        <Trash className="w-4 h-4 text-red-500" />
      </Button>
    </div>
  );
};