import { getDatabase } from './database.js';

export default async function handler(request, response){
    // Removed unnecessary fields like cas_od, cas_do, pocet, telefon if they are not used
    const { id, date, email, name,pocet, proposal, isGood} = request.body; // Added proposal and isGood
    const database = getDatabase();
    const newList = database.ref('solution').push();
    await newList.set({
        date: date,
        email: email,
        id: id,
        name: name,
        proposal: proposal, // Store the proposal
        isGood: isGood || false // Default to false if not provided
    })

    response.status(200).json({success: true});
}
