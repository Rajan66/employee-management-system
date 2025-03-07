"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Team, FormValues } from "./types";
import { TeamForm } from "./component/TeamForm";
import { TeamActions } from "./component/TeamActions";
import { TeamFilters } from "./component/TeamFilter";
import { MemberCountBadge } from "./component/TeamBadge";
import { useTeams } from "./types/useTeam";
import { useTeamForm } from "./types/useForms";
import { DeleteConfirmationDialog } from "./component/DeleteConfirmDialog";
export default function TeamsTable() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingTeam, setEditingTeam] = useState<Team | null>(null);
  
  const { 
    filteredTeams, 
    teams, 
    searchTerm, 
    setSearchTerm, 
    addTeam, 
    updateTeam, 
    deleteTeam,
    isDeleteDialogOpen,
    handleDeleteConfirm,
    handleDeleteCancel, 
  } = useTeams();

  // Handle adding a new team
  const handleAddTeam = (values: FormValues) => {
    const newTeamData = addFormMethods.prepareTeamData(values);
    addTeam(newTeamData);
    setIsAddDialogOpen(false);
  };

  // Handle editing a team
  const handleEditTeam = (values: FormValues) => {
    if (!editingTeam) return;
    
    const updatedTeamData = editFormMethods.prepareTeamData(values, editingTeam) as Team;
    updateTeam(updatedTeamData);
    setIsEditDialogOpen(false);
    setEditingTeam(null);
  };

  // Start editing a team
  const startEditing = (team: Team) => {
    setEditingTeam(team);
    setIsEditDialogOpen(true);
  };

  // Get form methods for adding and editing
  const addFormMethods = useTeamForm(handleAddTeam);
  const editFormMethods = useTeamForm(handleEditTeam, editingTeam);

  return (
    <Card className="w-full">
      <CardHeader className="bg-slate-50 dark:bg-zinc-900">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Teams Management</CardTitle>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="flex items-center gap-1">
                <Plus className="w-4 h-4" /> Add Team
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Team</DialogTitle>
              </DialogHeader>
              <TeamForm
                form={addFormMethods.form}
                formType="add"
                onCancel={() => setIsAddDialogOpen(false)}
                // selectedDepartment={addFormMethods.selectedDepartment}
                // handleDepartmentChange={addFormMethods.handleDepartmentChange}
                filteredLeads={addFormMethods.filteredLeads}
                filteredMembers={addFormMethods.filteredMembers}
                membersPopoverOpen={addFormMethods.membersPopoverOpen}
                setMembersPopoverOpen={addFormMethods.setMembersPopoverOpen}
                onSubmit={addFormMethods.handleSubmit}
              />
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <TeamFilters 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-100 dark:bg-zinc-950">
                <TableHead className="font-medium">ID</TableHead>
                <TableHead className="font-medium">Name</TableHead>
                <TableHead className="font-medium">Lead</TableHead>
                <TableHead className="font-medium text-center">Members</TableHead>
                <TableHead className="font-medium text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTeams.length > 0 ? (
                filteredTeams.map((team) => (
                  <TableRow key={team.id} className="hover:bg-slate-50 hover:dark:bg-zinc-900 transition-colors">
                    <TableCell className="font-medium">{team.id}</TableCell>
                    <TableCell>{team.name}</TableCell>
                    <TableCell>{team.leadName}</TableCell>
                    <TableCell className="text-center">
                      <MemberCountBadge count={team.memberCount} />
                    </TableCell>
                    <TableCell className="text-right">
                      <TeamActions 
                        team={team} 
                        onEdit={startEditing} 
                        onDelete={deleteTeam} 
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-slate-500">
                    No teams found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-4 text-sm text-slate-500">
          Showing {filteredTeams.length} of {teams.length} teams
        </div>
      </CardContent>

      {/* Edit Team Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Team</DialogTitle>
          </DialogHeader>
          <TeamForm
            form={editFormMethods.form}
            formType="edit"
            onCancel={() => setIsEditDialogOpen(false)}
            // selectedDepartment={editFormMethods.selectedDepartment}
            // handleDepartmentChange={editFormMethods.handleDepartmentChange}
            filteredLeads={editFormMethods.filteredLeads}
            filteredMembers={editFormMethods.filteredMembers}
            membersPopoverOpen={editFormMethods.membersPopoverOpen}
            setMembersPopoverOpen={editFormMethods.setMembersPopoverOpen}
            onSubmit={editFormMethods.handleSubmit}
          />
        </DialogContent>
      </Dialog>

      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />
    </Card>
  );
}
