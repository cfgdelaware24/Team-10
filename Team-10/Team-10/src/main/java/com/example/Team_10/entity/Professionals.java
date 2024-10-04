package com.example.Team_10.entity;
import java.util.ArrayList;
// {
//     "sub": "782bbtaQ",
//     "name": "John Doe",
//     "given_name": "John",
//     "family_name": "Doe",
//     "picture": "https://media.licdn-ei.com/dms/image/C5F03AQHqK8v7tB1HCQ/profile-displayphoto-shrink_100_100/0/",
//     "city": "en-US",
//     "email": "doe@email.com",
//     "email_verified": true
// }

public class Professionals {

    @Id
    private String name;
    private String email;
    private String picture;
    private String city;
    private ArrayList<String> skills;
    private ArrayList<String> interests;
    private boolean emailVerified; 

    
    public Professionals(String name, String email, String picture, String city, ArrayList<String> skills, ArrayList<String> interests, boolean emailVerified) {
        this.name = name;
        this.email = email;
        this.picture = picture;
        this.city = city;
        this.skills = skills;
        this.interests = interests;
        this.emailVerified = emailVerified;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public ArrayList<String> getSkills() {
        return skills;
    }

    public void setSkills(ArrayList<String> skills) {
        this.skills = skills;
    }

    public ArrayList<String> getInterests() {
        return interests;
    }

    public void setInterests(ArrayList<String> interests) {
        this.interests = interests;
    }

    public boolean isEmailVerified() {
        return emailVerified;
    }

    public void setEmailVerified(boolean emailVerified) {
        this.emailVerified = emailVerified;
    }


}
