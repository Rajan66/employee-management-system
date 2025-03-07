import { useState, useCallback } from "react";
import { Team } from "../types";
import { initialTeams } from "./mockData";
import { DeleteConfirmationDialog } from "../component/DeleteConfirmDialog";

export const useTeams = () => {
  const [teams, setTeams] = useState(initialTeams);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [teamToDelete, setTeamToDelete] = useState<number | null>(null);

  // Filter teams based on search term
  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    team.departmentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    team.leadName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add a new team
  const addTeam = useCallback((newTeam: Omit<Team, "id">) => {
    const teamWithId: Team = {
      ...newTeam,
      id: Math.max(...teams.map(t => t.id), 0) + 1,
    };
    
    setTeams(prev => [...prev, teamWithId]);
    return teamWithId;
  }, [teams]);

  // Update an existing team
  const updateTeam = useCallback((updatedTeam: Team) => {
    setTeams(prev => prev.map(team => 
      team.id === updatedTeam.id ? updatedTeam : team
    ));
  }, []);

  // Delete a team
  const deleteTeam = useCallback((id: number) => {
    setTeamToDelete(id);
    setIsDeleteDialogOpen(true);
  }, []);

  // Handle delete confirmation
  const handleDeleteConfirm = useCallback(() => {
    if (teamToDelete !== null) {
      setTeams(prev => prev.filter(team => team.id !== teamToDelete));
      setIsDeleteDialogOpen(false);
      setTeamToDelete(null);
    }
  }, [teamToDelete]);

  // Handle delete cancel
  const handleDeleteCancel = useCallback(() => {
    setIsDeleteDialogOpen(false);
    setTeamToDelete(null);
  }, []);

  return {
    teams,
    filteredTeams,
    searchTerm,
    setSearchTerm,
    addTeam,
    updateTeam,
    deleteTeam,
    isDeleteDialogOpen,
    handleDeleteConfirm,
    handleDeleteCancel,
  };
};