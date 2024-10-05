package com.example.Team_10.controller;

import com.example.Team_10.entity.NGO;
import com.example.Team_10.entity.Professional;
import com.example.Team_10.service.NGOService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/ngos")
public class NGOController {

    @Autowired
    private NGOService ngoService;

    @GetMapping
    public List<NGO> getAllNGOs() {
        return ngoService.getAllNGOs();
    }

    @PostMapping
    public NGO createNGO(@RequestBody NGO ngo) {
        return ngoService.createNGO(ngo);
    }

    @PutMapping("/{id}")
    public NGO updateNGO(@PathVariable Integer id, @RequestBody NGO ngo) {
        return ngoService.updateNGO(id, ngo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteNGO(@PathVariable Integer id) {
        ngoService.deleteNGO(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/positions/{positionId}/matching-professionals")
    public List<Professional> getMatchingProfessionals(@PathVariable Integer positionId) {
        return ngoService.findProfessionalsByMatchingSkills(positionId);
    }

    // Endpoint for a Professional to "like" a Position
    @PostMapping("/positions/{positionId}/like/{professionalId}")
    public ResponseEntity<?> likePosition(@PathVariable Integer positionId, @PathVariable Integer professionalId) {
        ngoService.addLikeToPosition(positionId, professionalId);
        return ResponseEntity.ok("Professional " + professionalId + " liked Position " + positionId);
    }

    // Endpoint to get all Professionals who liked a specific Position
    @GetMapping("/positions/{positionId}/liked-professionals/with-skill-match")
    public List<Professional> getProfessionalsWhoLikedPositionWithSkillMatch(@PathVariable Integer positionId) {
        return ngoService.getProfessionalsWhoLikedPositionWithSkillMatch(positionId);
    }
}