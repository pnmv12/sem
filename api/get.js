import {getDatabase} from './database.js'; // Importuje funkci getDatabase z modulu database.js

export default async function handler(request, response) { // Definuje a exportuje asynchronní funkci handler, která zpracovává HTTP požadavky.
    const database = getDatabase();
    const data = await database.ref('solution').once('value'); // Načtení dat z databáze
    console.log(data.val()); // Výpis načtených dat do konzole
    response.status(200).json(data.val()); // Odeslání dat jako JSON odpověď
}