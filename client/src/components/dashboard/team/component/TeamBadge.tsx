import React from "react";
import { Badge } from "@/components/ui/badge";

// interface DepartmentBadgeProps {
//   department: string;
// }

// export const DepartmentBadge: React.FC<DepartmentBadgeProps> = ({ department }) => {
//   const getDeptColor = (dept: string) => {
//     switch(dept) {
//       case "Engineering": return "bg-blue-100 text-blue-800";
//       case "Marketing": return "bg-green-100 text-green-800";
//       case "Human Resources": return "bg-purple-100 text-purple-800";
//       case "Design": return "bg-yellow-100 text-yellow-800";
//       case "Product": return "bg-orange-100 text-orange-800";
//       case "Sales": return "bg-pink-100 text-pink-800";
//       default: return "bg-gray-100 text-gray-800";
//     }
//   };

//   return (
//     <Badge 
//       variant="outline" 
//       className={`font-normal ${getDeptColor(department)}`}
//     >
//       {department}
//     </Badge>
//   );
// };

interface MemberCountBadgeProps {
  count: number;
}

export const MemberCountBadge: React.FC<MemberCountBadgeProps> = ({ count }) => {
  return (
    <Badge variant="secondary">
      {count}
    </Badge>
  );
};