package com.example.Team_10.controller;

import com.example.Team_10.entity.Position;
import com.example.Team_10.entity.Professional;
import com.example.Team_10.repository.ProfessionalRepository;
import com.example.Team_10.service.ProfessionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/professionals")
public class ProfessionalController {

    @Autowired
    private ProfessionalService professionalService;

    @Autowired
    private ProfessionalRepository professionalRepository;

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

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        // Check if a Professional exists with the given email and password
        Professional professional = professionalRepository.findByEmailAndPassword(email, password);

        if (professional != null) {
            return ResponseEntity.ok("Login successful");
        } else {
            // Return a detailed error response with a message field
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Invalid email or password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
}
