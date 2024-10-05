package com.example.Team_10.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Position {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String jobName;

    private String jobDescription;

    @ElementCollection
    private List<String> skills;

    @ManyToOne
    @JoinColumn(name = "ngo_id")
    @JsonBackReference
    private NGO ngo;

    @ManyToMany
    @JoinTable(
            name = "position_likes",
            joinColumns = @JoinColumn(name = "position_id"),
            inverseJoinColumns = @JoinColumn(name = "professional_id")
    )
    private List<Professional> likes = new ArrayList<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getJobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public NGO getNgo() {
        return ngo;
    }

    public void setNgo(NGO ngo) {
        this.ngo = ngo;
    }

    public List<Professional> getLikes() {
        return likes;
    }

    public void setLikes(List<Professional> likes) {
        this.likes = likes;
    }
}
