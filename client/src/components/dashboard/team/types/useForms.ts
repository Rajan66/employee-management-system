import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, Team, formSchema } from "../types";
import { departments, teamLeads, teamMembers } from "./mockData";

export const useTeamForm = (
  onSubmit: (values: FormValues) => void,
  initialTeam?: Team | null
) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    initialTeam?.department || null
  );
  const [membersPopoverOpen, setMembersPopoverOpen] = useState(false);

  // Setup form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialTeam?.name || "",
      department: initialTeam?.department || "",
      lead: initialTeam?.lead || "",
      members: initialTeam?.members || [],
    },
  });

  // Update form when initialTeam changes
  useEffect(() => {
    if (initialTeam) {
      form.reset({
        name: initialTeam.name,
        department: initialTeam.department,
        lead: initialTeam.lead,
        members: initialTeam.members,
      });
      setSelectedDepartment(initialTeam.department);
    } else {
      form.reset({
        name: "",
        department: "",
        lead: "",
        members: [],
      });
      setSelectedDepartment(null);
    }
  }, [initialTeam, form]);

  // Filter leads based on selected department
  const filteredLeads = selectedDepartment
    ? teamLeads.filter((lead) => lead.department === selectedDepartment)
    : teamLeads;

  // Filter members based on selected department
  const filteredMembers = selectedDepartment
    ? teamMembers.filter((member) => member.department === selectedDepartment)
    : teamMembers;

  // Helper to prepare team data from form values
  const prepareTeamData = (values: FormValues, existingTeam?: Team): Omit<Team, "id"> => {
    const dept = departments.find(d => d.id === values.department);
    const lead = teamLeads.find(l => l.id === values.lead);
    
    return {
      name: values.name,
      department: values.department,
      departmentName: dept?.name || values.department,
      lead: values.lead,
      leadName: lead?.name || values.lead,
      members: values.members,
      memberCount: values.members.length,
      ...(existingTeam ? { id: existingTeam.id } : {})
    };
  };

  // Handle department change
  const handleDepartmentChange = (value: string) => {
    form.setValue("department", value);
    setSelectedDepartment(value);
    // Reset lead and members when department changes
    form.setValue("lead", "");
    form.setValue("members", []);
  };

  return {
    form,
    selectedDepartment,
    membersPopoverOpen,
    setMembersPopoverOpen,
    filteredLeads,
    filteredMembers,
    prepareTeamData,
    handleDepartmentChange,
    handleSubmit: form.handleSubmit(onSubmit)
  };
};