import {getDatabase} from './database.js';

export default async function handler(request, response) { // Definuje a exportuje asynchronní funkci handler, která zpracovává HTTP požadavky.
    const database = getDatabase(); // Získání databáze
    const { idFirebase, parametry, hodnoty} = request.body;

    const solutionLink = database.ref('solution').child(idFirebase); // Odkaz na konkrétní rezervaci v databázi

    for(let i = 0; i < parameters.length; i++){
        await solutionLink.update({ [parametry[i]]: hodnoty[i]}); // Nastavení nové hodnoty pro daný parametr
    }

    response.status(200).json({success: true}); // Odeslání úspěšné odpovědi
}
/*
async function handleEdit(e) {
    const idFirebase = e.target.dataset.id;
    const idea = currentIdeas.find(i => i.idFirebase === idFirebase);
    if (!idea) return alert('Idea not found.');
    const newName = prompt('New First Name:', idea.name);
    const newProposal = prompt('New Proposal:', idea.proposal);
    const newDate = prompt('New Date (YYYY-MM-DD):', idea.date);
    const newNumber = prompt('New Phone:', idea.number || '');
    if (newName === null || newProposal === null || newDate === null || newNumber === null) return;
    const parametry = ['name', 'proposal', 'date', 'number'];
    const hodnoty = [newName, newProposal, newDate, newNumber];
    try {
        const res = await fetch('/api/edit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idFirebase, parametry, hodnoty })
        });
        const result = await res.json();
        if (result.success) {
            alert('Idea updated!');
            fetchAndDisplayIdeas();
        } else {
            alert('Failed to update.');
        }
    } catch {
        alert('Error updating idea.');
    }
}
*/
