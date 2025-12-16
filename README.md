# Team-10

https://github.com/user-attachments/assets/b4bdd425-155d-4ad5-b041-b5f391414c6d

# De-Impact Web App

**De-Impact** is a web application developed for [Spur Impact](https://spurimpact.org/), an organization that connects young professionals with NGOs in Delaware. This platform simplifies the process of matching professionals to NGO opportunities based on their skills, interests, and location, using a 60% minimum compatibility threshold. The goal is to foster **Gen-Z engagement** in meaningful community work by making the connection process straightforward and efficient.

## Features
- **Click-based matching system**: Users can set up profiles and browse NGO opportunities. The system dynamically matches professionals with NGOs based on a 60% or higher alignment of skills, interests, and location, streamlining the connection process.
- **User-friendly interface**: Designed with **Gen-Z** in mind, the platform’s simple interface and easy navigation accommodate users with shorter attention spans. The platform allows professionals and NGOs to access relevant information quickly and efficiently.
- **Real-time application**: Once matched, professionals can apply to NGO roles directly, and NGOs can immediately begin reviewing candidates, saving time and ensuring efficient communication.
- **Data management**: The system efficiently stores and processes user data using **MySQL**, providing fast and accurate results for matching professionals and NGOs.

## Tech Stack

#### Front-End
- ![React](https://img.shields.io/badge/-React.js-61DAFB?logo=react&logoColor=white) **React.js**
- ![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white) **TypeScript**
- ![Tailwind](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white) **Tailwind CSS**
- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white) **HTML5**
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) **CSS3**

#### Back-End
- ![Java](https://img.shields.io/badge/-Java-007396?logo=java&logoColor=white) **Java**
- ![Spring Boot](https://img.shields.io/badge/-Spring%20Boot-6DB33F?logo=springboot&logoColor=white) **Spring Boot**
- ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white) **MySQL**

## Project Overview

#### 1. **Click-Based Matching System**
The click-based matching system was developed to simplify the process of connecting professionals with NGOs by matching users based on a **60% or higher alignment** of their profiles. The matching system works as follows:
   - **Dynamic algorithm**: The platform compares skills, interests, and location from the user profiles against the requirements provided by NGOs. Using **Spring Boot**, we built an algorithm that automates the match-making process in real-time.
   - **User profiles**: Professionals can browse through opportunities that align with their personal and professional goals, while NGOs can easily review compatible candidates. This eliminates unnecessary back-and-forth communication and ensures more meaningful connections between NGOs and young professionals.
   - **Efficiency**: By automatically determining matches with at least 60% compatibility, the platform reduces the time it takes for professionals to find the right opportunity and for NGOs to connect with the right talent. This feature enhances engagement and involvement from **Gen-Z** professionals, encouraging them to participate in community work.

### 2. **User Experience & Interface Design**
   The platform's interface was designed with **Gen-Z**'s preferences in mind, focusing on simplicity, efficiency, and adaptability. Key aspects include:
   - **Fast, responsive front-end**: Built using **React.js** and **TypeScript**, the front-end is highly responsive and intuitive, adapting to various device sizes. The app provides a seamless experience, allowing users to navigate between pages with minimal load times.
   - **Minimalistic design**: The UI uses a clean design powered by **Tailwind CSS**, keeping the interface free from distractions while maintaining accessibility. This design caters to **Gen-Z**’s expectations for fast, user-friendly digital experiences.
   - **Simple onboarding**: Professionals and NGOs can set up profiles within minutes, ensuring they get to the core of the app's functionality—matching and connecting—without delays. This quick onboarding process boosts engagement rates, especially among younger users with shorter attention spans.

### 3. **Back-End Integration**
   The back-end of De-Impact was developed using **Java** and **Spring Boot** to ensure smooth functionality and scalability:
   - **Matching engine**: The heart of the back-end is the matching engine, implemented with **Spring Boot**, which processes user input from both professionals and NGOs. The engine compares profile data (skills, interests, and location) to calculate a compatibility score. If the alignment exceeds 60%, a match is generated. The system uses real-time updates, ensuring fresh results as new data comes in.
   - **Data synchronization**: **Spring Boot** is responsible for managing the flow of data between the front-end and back-end. It handles all user requests, processes matching logic, and serves the appropriate results to the front-end interface.
   - **Scalability**: Built with flexibility in mind, the back-end can scale to accommodate a growing number of users and NGOs without compromising performance. The platform’s architecture ensures that as more users onboard, the system continues to function smoothly.

### 4. **Data Management**
   **MySQL** was used to store data from both professionals and NGOs. The back-end team set up a **normalized database schema** to ensure that user profiles, skills, interests, and NGO data were organized efficiently.
   - **Professional data**: Stored information such as names, skills, interests, location, and industry sector. This data was used by the matching algorithm to find the best opportunities for professionals.
   - **NGO data**: The database also housed information like organization names, available positions, required skills, sector, and location. This allowed NGOs to search for candidates based on the skills and preferences they needed most.
   - **Optimized for performance**: Queries were optimized for fast data retrieval, ensuring that when users searched or submitted their profiles, the matching results were delivered in real-time.
   - **Collaboration**: Although the data management was handled primarily by other team members, it played a critical role in ensuring the efficiency of the matching system and the overall user experience.

 <br /> <br /> The code ("Code") in this repository was created solely by the student teams during a coding competition hosted by JPMorgan Chase Bank, N.A. ("JPMC"). JPMC did not create or contribute to the development of the Code. This Code is provided AS IS and JPMC makes no warranty of any kind, express or implied, as to the Code, including but not limited to, merchantability, satisfactory quality, non-infringement, title or fitness for a particular purpose or use.