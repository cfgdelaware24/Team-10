import Professional from './professional.model.js';
import Position from './position.model.js';

// This function looks at a position object and returns an array of professional objects
// that have a 60%+ match rate with the tags of the job posting
async function search_for_professionals(positionID) {
    try {
        // Find the position by its ID
        const position = await Position.findById(positionID);

        if (!position) {
            throw new Error('Position not found');
        }

        // Find all professionals from the database
        const people = await Professional.find();

        // Initialize an empty array to store the matching professionals
        let res = [];

        // Loop through each person and match them to the position
        for (let i = 0; i < people.length; i++) {
            if (match_professional_to_position(people[i], position)) {
                res.push(people[i]);
            }
        }

        // Return the array of matching professionals
        return res;
    } catch (error) {
        console.error(error);
        return [];
    }
}

// This function looks at a professional and returns an array of position objects
// that have a 60%+ match rate with the professional's skills
async function search_for_positions(professionalID) {
    try {
        // Find the professional by their ID
        const person = await Professional.findById(professionalID);

        if (!person) {
            throw new Error('Professional not found');
        }

        // Find all positions from the database
        const positions = await Position.find();

        // Initialize an empty array to store the matching positions
        let res = [];

        // Loop through each position and match it to the professional
        for (let i = 0; i < positions.length; i++) {
            const countOccurrences = (arr1, arr2) => arr1.filter(item => arr2.includes(item)).length;
            res.append([positions[i], countOccurrences(person.skills, positions[i].skills)])
        }
        return res.sort((a, b) => b[1] - a[1])

        // Return the array of matching positions
        return res;
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Helper function to check if a professional is a match to a position
function match_professional_to_position(person, position) {
    // Initialize a counter to keep track of matching skills
    let count = 0;

    // Loop through each skill of the current person
    for (let j = 0; j < person.skills.length; j++) {
        // Check if the current skill is included in the position's required skills
        if (position.skills.includes(person.skills[j])) {
            // Increment the counter if the skill matches
            count += 1;
        }
    }

    // Check if the match rate is 60% or higher
    if (count / position.skills.length >= 0.6) {
        // Return true if they meet the match rate
        return true;
    }

    return false;
}

export { search_for_professionals, search_for_positions };
