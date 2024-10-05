package com.example.Team_10.service;

import com.example.Team_10.entity.NGO;
import com.example.Team_10.entity.Position;
import com.example.Team_10.entity.Professional;
import com.example.Team_10.exceptions.ResourceNotFoundException;
import com.example.Team_10.repository.NGORepository;
import com.example.Team_10.repository.PositionRepository;
import com.example.Team_10.repository.ProfessionalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NGOService {

    @Autowired
    private NGORepository ngoRepository;

    @Autowired
    private ProfessionalRepository professionalRepository;

    @Autowired
    private PositionRepository positionRepository;

    public List<NGO> getAllNGOs() {
        return ngoRepository.findAll();
    }

    public NGO createNGO(NGO ngo) {
        // Step 1: Save the NGO first to ensure it has an ID
        NGO savedNGO = ngoRepository.save(ngo);

        // Step 2: Set the NGO reference in each position and save positions
        if (savedNGO.getPositions() != null) {
            for (Position position : savedNGO.getPositions()) {
                position.setNgo(savedNGO);  // Set the NGO reference in the position
            }
        }

        // Save the NGO again with the associated positions
        return ngoRepository.save(savedNGO);
    }

    public List<Professional> findProfessionalsByMatchingSkills(Integer positionId) {
        // Step 1: Find the Position by its ID
        Position position = positionRepository.findById(positionId)
                .orElseThrow(() -> new ResourceNotFoundException("Position not found with id: " + positionId));

        List<String> positionSkills = position.getSkills();  // Get the skills from the Position
        List<Professional> matchingProfessionals = new ArrayList<>(); // To store the matched Professionals

        // Step 2: Fetch all Professionals
        List<Professional> professionals = professionalRepository.findAll();

        // Step 3: Check skills for each Professional
        for (Professional professional : professionals) {
            List<String> professionalSkills = professional.getSkills();

            // Find intersection of skills between Position and Professional
            long matchedSkillsCount = professionalSkills.stream()
                    .filter(positionSkills::contains)
                    .count();

            // Calculate if at least 50% of the position skills match
            if (matchedSkillsCount >= positionSkills.size() / 2.0) {
                // Add the entire Professional object to the result list if there's a match
                matchingProfessionals.add(professional);
            }
        }

        // Step 4: Return the list of matching Professionals
        return matchingProfessionals;
    }

    public NGO updateNGO(Integer id, NGO ngoDetails) {
        NGO ngo = ngoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("NGO not found with id: " + id));

        ngo.setName(ngoDetails.getName());
        ngo.setEmail(ngoDetails.getEmail());
        ngo.setPassword(ngoDetails.getPassword());
        ngo.setPositions(ngoDetails.getPositions());

        return ngoRepository.save(ngo);
    }

    public void deleteNGO(Integer id) {
        NGO ngo = ngoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("NGO not found with id: " + id));
        ngoRepository.delete(ngo);
    }

    public Position addLikeToPosition(Integer positionId, Integer professionalId) {
        // Fetch the Position and Professional by their IDs
        Position position = positionRepository.findById(positionId)
                .orElseThrow(() -> new ResourceNotFoundException("Position not found with id: " + positionId));

        Professional professional = professionalRepository.findById(professionalId)
                .orElseThrow(() -> new ResourceNotFoundException("Professional not found with id: " + professionalId));

        // Add the Professional to the likes list (if not already added)
        if (!position.getLikes().contains(professional)) {
            position.getLikes().add(professional);
        }

        // Save and return the updated position
        return positionRepository.save(position);
    }

    public List<Professional> getProfessionalsWhoLikedPositionWithSkillMatch(Integer positionId) {
        // Step 1: Find the Position by its ID
        Position position = positionRepository.findById(positionId)
                .orElseThrow(() -> new ResourceNotFoundException("Position not found with id: " + positionId));

        List<String> positionSkills = position.getSkills();  // Get the skills from the Position
        List<Professional> matchingProfessionals = new ArrayList<>(); // To store the matched Professionals

        // Step 2: Get the list of Professionals who liked this Position
        List<Professional> professionalsWhoLiked = position.getLikes();

        // Step 3: Check skills for each Professional who liked the Position
        for (Professional professional : professionalsWhoLiked) {
            List<String> professionalSkills = professional.getSkills();

            // Find intersection of skills between Position and Professional
            long matchedSkillsCount = professionalSkills.stream()
                    .filter(positionSkills::contains)
                    .count();

            // Calculate if at least 50% of the position skills match
            if (matchedSkillsCount >= positionSkills.size() / 2.0) {
                // Add the entire Professional object to the result list if there's a match
                matchingProfessionals.add(professional);
            }
        }

        // Step 4: Return the list of professionals who liked the position and have at least 50% skill match
        return matchingProfessionals;
    }
}
