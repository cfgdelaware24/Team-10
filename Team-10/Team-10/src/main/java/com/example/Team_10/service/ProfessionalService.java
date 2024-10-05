package com.example.Team_10.service;

import com.example.Team_10.entity.Position;
import com.example.Team_10.entity.Professional;
import com.example.Team_10.exceptions.ResourceNotFoundException;
import com.example.Team_10.repository.PositionRepository;
import com.example.Team_10.repository.ProfessionalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProfessionalService {

    @Autowired
    private ProfessionalRepository professionalRepository;

    @Autowired
    private PositionRepository positionRepository;

    public List<Position> findPositionsByMatchingSkills(Integer professionalId) {
        // Step 1: Find the Professional by its ID
        Professional professional = professionalRepository.findById(professionalId)
                .orElseThrow(() -> new ResourceNotFoundException("Professional not found with id: " + professionalId));

        List<String> professionalSkills = professional.getSkills();  // Get the skills from the Professional
        List<Position> matchingPositions = new ArrayList<>(); // To store the matched Positions

        // Step 2: Fetch all Positions
        List<Position> positions = positionRepository.findAll();

        // Step 3: Check skills for each Position
        for (Position position : positions) {
            List<String> positionSkills = position.getSkills();

            // Find intersection of skills between Professional and Position
            long matchedSkillsCount = positionSkills.stream()
                    .filter(professionalSkills::contains)
                    .count();

            // Calculate if at least 50% of the position skills match
            if (matchedSkillsCount >= positionSkills.size() / 2.0) {
                // Add the entire Position object to the result list if there's a match
                matchingPositions.add(position);
            }
        }

        // Step 4: Return the list of matching Positions
        return matchingPositions;
    }

    public List<Professional> getAllProfessionals() {
        return professionalRepository.findAll();
    }

    public Professional createProfessional(Professional professional) {
        return professionalRepository.save(professional);
    }

    public Professional updateProfessional(Integer id, Professional professionalDetails) {
        Professional professional = professionalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Professional not found with id: " + id));

        professional.setFirstName(professionalDetails.getFirstName());
        professional.setLastName(professionalDetails.getLastName());
        professional.setEmail(professionalDetails.getEmail());
        professional.setPassword(professionalDetails.getPassword());
        professional.setSkills(professionalDetails.getSkills());

        return professionalRepository.save(professional);
    }

    public void deleteProfessional(Integer id) {
        Professional professional = professionalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Professional not found with id: " + id));
        professionalRepository.delete(professional);
    }
}
