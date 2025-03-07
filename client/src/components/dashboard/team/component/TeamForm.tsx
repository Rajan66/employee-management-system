import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { DialogFooter } from "@/components/ui/dialog";
import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { FormValues, TeamLead, TeamMember } from "../types";
// import { departments } from "../types/mockData";
import { UseFormReturn } from "react-hook-form";

interface TeamFormProps {
  form: UseFormReturn<FormValues>;
  formType: 'add' | 'edit';
  onCancel: () => void;
  filteredLeads: TeamLead[];
  filteredMembers: TeamMember[];
  membersPopoverOpen: boolean;
  setMembersPopoverOpen: (open: boolean) => void;
  onSubmit: () => void;
}

export const TeamForm: React.FC<TeamFormProps> = ({
  form,
  formType,
  onCancel,
  filteredLeads,
  filteredMembers,
  membersPopoverOpen,
  setMembersPopoverOpen,
  onSubmit
}) => {
  const currentDepartment = form.watch('department');

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Team Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter team name" {...field} />
              </FormControl>
              <FormDescription>The name of your team.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Team Lead Field */}
        <FormField
          control={form.control}
          name="lead"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Lead</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value} 
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Select a team lead"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {filteredLeads.map((lead) => (
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

        {/* Team Members Field (Multi-select) */}
        <FormField
          control={form.control}
          name="members"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Members</FormLabel>
              <Popover open={membersPopoverOpen} onOpenChange={setMembersPopoverOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={membersPopoverOpen}
                      className={cn(
                        "w-full justify-between",
                        !field.value.length && "text-muted-foreground"
                      )}
                    >
                      {field.value.length > 0
                        ? `${field.value.length} member${field.value.length > 1 ? "s" : ""} selected`
                        : "Select team members"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search members..." />
                    <CommandList>
                      <CommandEmpty>No members found.</CommandEmpty>
                      <CommandGroup className="max-h-64 overflow-auto">
                        {filteredMembers.map((member) => (
                          <CommandItem
                            key={member.id}
                            value={member.name}
                            onSelect={() => {
                              const isSelected = field.value.includes(member.id);
                              const newValue = isSelected
                                ? field.value.filter((value) => value !== member.id)
                                : [...field.value, member.id];

                              form.setValue("members", newValue, {
                                shouldValidate: true,
                              });
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                field.value.includes(member.id) ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {member.name} (Department: {member.department})
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>Select the members who will be part of this team.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="submit">
            {formType === 'add' ? 'Create Team' : 'Update Team'}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};
