package com.example.Team_10.repository;

import com.example.Team_10.entity.Professional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfessionalRepository extends JpaRepository<Professional, Integer> {
    Professional findByEmailAndPassword(String email, String password);
}
