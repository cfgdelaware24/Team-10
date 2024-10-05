package com.example.Team_10.repository;

import com.example.Team_10.entity.NGO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NGORepository extends JpaRepository<NGO, Integer> {
}
