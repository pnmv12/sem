import { getDatabase } from './database.js';

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    }

    const { problemText, rewardText } = request.body;
    const database = getDatabase();

    try {
        // Store problem and reward in a specific path, e.g., 'settings/currentProblem'
        await database.ref('settings/currentProblem').set({
            problemText: problemText,
            rewardText: rewardText,
            timestamp: new Date().toISOString()
        });
        response.status(200).json({ success: true });
    } catch (error) {
        console.error("Error posting problem:", error);
        response.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}