import { Department, Team, TeamLead, TeamMember } from "../types";

// Sample data for departments
export const departments: Department[] = [
  { id: "engineering", name: "Engineering" },
  { id: "product", name: "Product" },
  { id: "design", name: "Design" },
  { id: "marketing", name: "Marketing" },
  { id: "sales", name: "Sales" },
  { id: "hr", name: "Human Resources" },
];

// Sample data for team leads
export const teamLeads: TeamLead[] = [
  { id: "john-doe", name: "John Doe", department: "engineering" },
  { id: "jane-smith", name: "Jane Smith", department: "product" },
  { id: "alex-johnson", name: "Alex Johnson", department: "design" },
  { id: "sarah-williams", name: "Sarah Williams", department: "marketing" },
  { id: "michael-brown", name: "Michael Brown", department: "sales" },
  { id: "emily-davis", name: "Emily Davis", department: "hr" },
];

// Sample data for team members
export const teamMembers: TeamMember[] = [
  { id: "member-1", name: "Robert Chen", department: "engineering" },
  { id: "member-2", name: "Lisa Wong", department: "engineering" },
  { id: "member-3", name: "David Kim", department: "product" },
  { id: "member-4", name: "Maria Garcia", department: "design" },
  { id: "member-5", name: "James Wilson", department: "marketing" },
  { id: "member-6", name: "Patricia Moore", department: "sales" },
  { id: "member-7", name: "Thomas Taylor", department: "hr" },
  { id: "member-8", name: "Jennifer Lee", department: "engineering" },
  { id: "member-9", name: "Christopher Martin", department: "product" },
  { id: "member-10", name: "Elizabeth Thompson", department: "design" },
];

// Initial teams data
export const initialTeams: Team[] = [
  { 
    id: 1, 
    name: "Frontend", 
    department: "engineering", 
    departmentName: "Engineering", 
    lead: "john-doe", 
    leadName: "John Doe", 
    members: ["member-1", "member-2", "member-8"], 
    memberCount: 3 
  },
  { 
    id: 2, 
    name: "Branding", 
    department: "marketing", 
    departmentName: "Marketing", 
    lead: "sarah-williams", 
    leadName: "Sarah Williams", 
    members: ["member-5"], 
    memberCount: 1 
  },
  { 
    id: 3, 
    name: "Recruiting", 
    department: "hr", 
    departmentName: "Human Resources", 
    lead: "emily-davis", 
    leadName: "Emily Davis", 
    members: ["member-7"], 
    memberCount: 1 
  },
  { 
    id: 4, 
    name: "User Experience", 
    department: "design", 
    departmentName: "Design", 
    lead: "alex-johnson", 
    leadName: "Alex Johnson", 
    members: ["member-4", "member-10"], 
    memberCount: 2 
  },
  { 
    id: 5, 
    name: "Backend", 
    department: "engineering", 
    departmentName: "Engineering", 
    lead: "john-doe", 
    leadName: "John Doe", 
    members: ["member-1", "member-8"], 
    memberCount: 2 
  },
];