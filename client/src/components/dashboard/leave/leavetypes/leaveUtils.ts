export const calculateDuration = (start: string, end: string): number => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  };
  
  export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  
  export const getTypeColor = (type: string): string => {
    switch (type.toLowerCase()) {
      case "sick leave": return "text-red-600";
      case "vacation": return "text-blue-600";
      case "personal leave": return "text-purple-600";
      default: return "text-gray-600";
    }
  };
  