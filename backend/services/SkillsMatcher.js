// This function looks at a position object and returns an array of professional objects
// that have a 60%+ match rate with the tags of the job posting
function search_for_professionals(people, position) {
    // Initialize an empty array to store the matching professionals
    res = []
    // Loop through each person in the people array
    for (let i = 0; i < people.length; i++) {
        if (match_professional_to_position(people[i], position)) {
            res.push(people[i])
        }
    }
    // Return the array of matching professionals
    return res;
}

function search_for_positions(person, positions) {
    return null
}

// Helper function to check if a professional is a match to a position
function match_professional_to_position(person, position) {
    // Initialize a counter to keep track of matching skills
    let count = 0
    // Loop through each skill of the current person
    for (let j = 0; j < person[i].skills.length; j++) {
        // Check if the current skill is included in the position's required skills
        if (position.skills.includes(person[i].skills[j])) {
            // Increment the counter if the skill matches
            count += 1
        }
    }
    // Check if the match rate is 60% or higher
    if (count / position.skills.length >= 0.6) {
        // Add the current person to the result array if they meet the match rate
        return true
    }
    return false
}