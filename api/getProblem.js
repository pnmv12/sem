import { getDatabase } from './database.js';

export default async function handler(request, response) 
{  if (request.method !== 'GET') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    } 

    const database = getDatabase();

    try {
        const data = await database.ref('settings/currentProblem').once('value');
        const problemData = data.val();
        response.status(200).json(problemData || {}); // Vratí prazdný objekt pokud není data
        } catch (error) {
        console.error("Error fetching problem:", error);
        response.status(500).json({ success: false, message: 'Internal Server Error' });
    } 
}