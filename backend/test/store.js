// store.js
import {create} from 'zustand';

const BASE_URL = 'http://localhost:3000'; 

const useStore = create((set) => ({
  professionals: [],
  positions: [],
  searchForProfessionals: async (positionID) => {
    try {
      const response = await fetch(`${BASE_URL}/api/positions/${positionID}`);
      const position = await response.json();
      
      if (!position) {
        throw new Error('Position not found');
      }

      const requiredSkills = position.skills;

      const professionalResponse = await fetch(`${BASE_URL}/api/professionals?skills=${requiredSkills.join(',')}`);
      const matchingProfessionals = await professionalResponse.json();

      set({ professionals: matchingProfessionals });
    } catch (error) {
      console.error('Error in searchForProfessionals:', error);
      throw error;
    }
  },
  searchForPositions: async (professionalID) => {
    try {
      const response = await fetch(`${BASE_URL}/api/professionals/${professionalID}`);
      const professional = await response.json();

      if (!professional) {
        throw new Error('Professional not found');
      }

      const professionalSkills = professional.skills;

      const positionResponse = await fetch(`${BASE_URL}/api/positions?skills=${professionalSkills.join(',')}`);
      const matchingPositions = await positionResponse.json();

      set({ positions: matchingPositions });
    } catch (error) {
      console.error('Error in searchForPositions:', error);
      throw error;
    }
  },
}));

export default useStore;
