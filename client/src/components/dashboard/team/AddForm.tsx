"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Link from "next/link"

// Import command components from cmdk directly if shadcn/ui doesn't expose them properly
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "cmdk"

interface TeamLead {
  id: string;
  name: string;
}

interface TeamMember {
  id: string;
  name: string;
  department: string;
}

const teamLeads: TeamLead[] = [
  { id: "john-doe", name: "John Doe" },
  { id: "jane-smith", name: "Jane Smith" },
  { id: "alex-johnson", name: "Alex Johnson" },
  { id: "sarah-williams", name: "Sarah Williams" },
  { id: "michael-brown", name: "Michael Brown" },
  { id: "emily-davis", name: "Emily Davis" },
]

const teamMembers: TeamMember[] = [
  { id: "member-1", name: "Robert Chen", department: "Engineering" },
  { id: "member-2", name: "Lisa Wong", department: "Engineering" },
  { id: "member-3", name: "David Kim", department: "Product" },
  { id: "member-4", name: "Maria Garcia", department: "Design" },
  { id: "member-5", name: "James Wilson", department: "Marketing" },
  { id: "member-6", name: "Patricia Moore", department: "Sales" },
  { id: "member-7", name: "Thomas Taylor", department: "HR" },
  { id: "member-8", name: "Jennifer Lee", department: "Engineering" },
  { id: "member-9", name: "Christopher Martin", department: "Product" },
  { id: "member-10", name: "Elizabeth Thompson", department: "Design" },
]

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Team name must be at least 2 characters.",
  }),
  lead: z.string({
    required_error: "Please select a team lead.",
  }),
  members: z.array(z.string()).min(1, {
    message: "Please select at least one team member.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function TeamsForm() {
  const [open, setOpen] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      members: [],
    },
  })

  function onSubmit(values: FormValues) {
    console.log(values)
    alert("Form submitted successfully!\n" + JSON.stringify(values, null, 2))
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-sm">
      <Link href="/dashboard">
        <Button variant="ghost" className="flex bg-gray-800 text-gray-100 items-center mb-4 rounded-full">
          <ArrowLeft /> 
        </Button>
      </Link>
      <h2 className="text-2xl font-bold mb-6">Create New Team</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter team name" {...field} />
                </FormControl>
                <FormDescription>The name of your new team.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lead"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Lead</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a team lead" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {teamLeads.map((lead) => (
                      <SelectItem key={lead.id} value={lead.id}>
                        {lead.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>The person who will lead this team.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="members"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Members</FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
                        {field.value.length > 0
                          ? `${field.value.length} member${field.value.length > 1 ? "s" : ""} selected`
                          : "Select team members"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <div className="border-none rounded-md overflow-hidden">
                      <div className="flex flex-col">
                        <div className="p-2">
                          <input
                            className="w-full p-2 border rounded-md"
                            placeholder="Search members..."
                          />
                        </div>
                        <div className="max-h-64 overflow-auto p-1">
                          {teamMembers.length === 0 && (
                            <div className="p-2 text-center text-gray-500">No members found.</div>
                          )}
                          {teamMembers.map((member) => (
                            <div
                              key={member.id}
                              className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                              onClick={() => {
                                const isSelected = field.value.includes(member.id);
                                const newValue = isSelected
                                  ? field.value.filter((item) => item !== member.id)
                                  : [...field.value, member.id];
                                field.onChange(newValue);
                              }}
                            >
                              <div className="mr-2 h-4 w-4 flex items-center justify-center">
                                {field.value.includes(member.id) && (
                                  <Check className="h-4 w-4" />
                                )}
                              </div>
                              <span>{`${member.name} (${member.department})`}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <FormDescription>The members who will be part of this team.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Create Team</Button>
        </form>
      </Form>
    </div>
  )
}