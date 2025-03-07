import { z } from "zod";

// Define Team interface
export interface Team {
  id: number;
  name: string;
  department: string;
  departmentName: string;
  lead: string;
  leadName: string;
  members: string[];
  memberCount: number;
}

export interface Department {
  id: string;
  name: string;
}

export interface TeamLead {
  id: string;
  name: string;
  department: string;
}

export interface TeamMember {
  id: string;
  name: string;
  department: string;
}

// Define the form schema with Zod
export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Team name must be at least 2 characters.",
  }),
  department: z.string({
    required_error: "Please select a department.",
  }),
  lead: z.string({
    required_error: "Please select a team lead.",
  }),
  members: z.array(z.string()).min(1, {
    message: "Please select at least one team member.",
  }),
});

export type FormValues = z.infer<typeof formSchema>;