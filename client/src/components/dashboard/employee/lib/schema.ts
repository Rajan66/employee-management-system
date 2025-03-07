import { z } from "zod"

export const employeeSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  department: z.string().min(1, { message: "Please select a department" }),
  role: z.string().min(1, { message: "Role is required" }),
  status: z.enum(["Active", "On Leave", "Terminated"]),
  joinDate: z.string(),
})

export type Employee = z.infer<typeof employeeSchema> & { id: string }

