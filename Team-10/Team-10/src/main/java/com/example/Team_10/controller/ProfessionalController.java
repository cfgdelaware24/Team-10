package com.example.Team_10.controller;

import com.example.Team_10.entity.Position;
import com.example.Team_10.entity.Professional;
import com.example.Team_10.service.ProfessionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/professionals")
public class ProfessionalController {

    @Autowired
    private ProfessionalService professionalService;

    @GetMapping
    public List<Professional> getAllProfessionals() {
        return professionalService.getAllProfessionals();
    }

    @PostMapping
    public Professional createProfessional(@RequestBody Professional professional) {
        return professionalService.createProfessional(professional);
    }

    @PutMapping("/{id}")
    public Professional updateProfessional(@PathVariable Integer id, @RequestBody Professional professional) {
        return professionalService.updateProfessional(id, professional);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProfessional(@PathVariable Integer id) {
        professionalService.deleteProfessional(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{professionalId}/matching-positions")
    public List<Position> getMatchingPositions(@PathVariable Integer professionalId) {
        return professionalService.findPositionsByMatchingSkills(professionalId);
    }
}
