import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface TeamFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const TeamFilters: React.FC<TeamFiltersProps> = ({ 
  searchTerm, 
  onSearchChange 
}) => {
  return (
    <div className="flex items-center mb-6 relative ">
      <Search className="w-4 h-4 absolute left-3 text-slate-400" />
      <Input 
        placeholder="Search teams..." 
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 bg-slate-50 dark:bg-zinc-900"
      />
    </div>
  );
};