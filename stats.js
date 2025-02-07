
const calendrier = [
    // Matchs passés avec résultats
    {
        "MatchNumber": 1,
        "RoundNumber": 1,
        "DateUtc": "2024-08-18 15:30:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Man City",
        "HomeTeamScore": 0,
        "AwayTeamScore": 2
    },
    {
        "MatchNumber": 2,
        "RoundNumber": 2,
        "DateUtc": "2024-08-25 13:00:00Z",
        "Location": "Molineux Stadium",
        "HomeTeam": "Wolves",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": 2,
        "AwayTeamScore": 6
    },
    {
        "MatchNumber": 3,
        "RoundNumber": 3,
        "DateUtc": "2024-09-01 12:30:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Crystal Palace",
        "HomeTeamScore": 1,
        "AwayTeamScore": 1
    },
    {
        "MatchNumber": 4,
        "RoundNumber": 4,
        "DateUtc": "2024-09-14 19:00:00Z",
        "Location": "Vitality Stadium",
        "HomeTeam": "Bournemouth",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": 2,
        "AwayTeamScore": 2
    },
    {
        "MatchNumber": 5,
        "RoundNumber": 5,
        "DateUtc": "2024-09-21 11:30:00Z",
        "Location": "London Stadium",
        "HomeTeam": "West Ham",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": 1,
        "AwayTeamScore": 1
    },
    {
        "MatchNumber": 6,
        "RoundNumber": 6,
        "DateUtc": "2024-09-28 14:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Brighton",
        "HomeTeamScore": 4,
        "AwayTeamScore": 2
    },
    {
        "MatchNumber": 7,
        "RoundNumber": 7,
        "DateUtc": "2024-10-05 14:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Nott'm Forest",
        "HomeTeamScore": 1,
        "AwayTeamScore": 1
    },
    {
        "MatchNumber": 8,
        "RoundNumber": 8,
        "DateUtc": "2024-10-19 14:00:00Z",
        "Location": "Anfield",
        "HomeTeam": "Liverpool",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": 2,
        "AwayTeamScore": 1
    },
    {
        "MatchNumber": 9,
        "RoundNumber": 9,
        "DateUtc": "2024-10-26 14:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Newcastle",
        "HomeTeamScore": 2,
        "AwayTeamScore": 1
    },
    {
        "MatchNumber": 10,
        "RoundNumber": 10,
        "DateUtc": "2024-11-02 15:00:00Z",
        "Location": "Old Trafford",
        "HomeTeam": "Man Utd",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": 1,
        "AwayTeamScore": 1
    },
    {
        "MatchNumber": 11,
        "RoundNumber": 11,
        "DateUtc": "2024-11-09 15:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Arsenal",
        "HomeTeamScore": 1,
        "AwayTeamScore": 1
    },
    {
        "MatchNumber": 12,
        "RoundNumber": 12,
        "DateUtc": "2024-11-23 15:00:00Z",
        "Location": "King Power Stadium",
        "HomeTeam": "Leicester",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": 1,
        "AwayTeamScore": 2
    },
    {
        "MatchNumber": 13,
        "RoundNumber": 13,
        "DateUtc": "2024-11-30 15:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Aston Villa",
        "HomeTeamScore": 3,
        "AwayTeamScore": 0
    },
    {
        "MatchNumber": 14,
        "RoundNumber": 14,
        "DateUtc": "2024-12-04 19:45:00Z",
        "Location": "St. Mary's Stadium",
        "HomeTeam": "Southampton",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": 1,
        "AwayTeamScore": 5
    },
    {
        "MatchNumber": 15,
        "RoundNumber": 15,
        "DateUtc": "2024-12-07 15:00:00Z",
        "Location": "Tottenham Hotspur Stadium",
        "HomeTeam": "Spurs",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": 3,
        "AwayTeamScore": 4
    },
    {
        "MatchNumber": 16,
        "RoundNumber": 16,
        "DateUtc": "2024-12-14 15:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Brentford",
        "HomeTeamScore": 2,
        "AwayTeamScore": 1
    },
    {
        "MatchNumber": 17,
        "RoundNumber": 17,
        "DateUtc": "2024-12-21 15:00:00Z",
        "Location": "Goodison Park",
        "HomeTeam": "Everton",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": 0,
        "AwayTeamScore": 0
    },
    {
        "MatchNumber": 18,
        "RoundNumber": 18,
        "DateUtc": "2024-12-26 15:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Fulham",
        "HomeTeamScore": 1,
        "AwayTeamScore": 2
    },
    {
        "MatchNumber": 19,
        "RoundNumber": 19,
        "DateUtc": "2025-01-01 15:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Ipswich",
        "HomeTeamScore": 0,
        "AwayTeamScore": 2
    },
    
    // Matchs à venir
    {
        "MatchNumber": 20,
        "RoundNumber": 20,
        "DateUtc": "2025-01-04 15:00:00Z",
        "Location": "Selhurst Park",
        "HomeTeam": "Crystal Palace",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": 1,
        "AwayTeamScore": 1
    },
    {
        "MatchNumber": 21,
        "RoundNumber": 21,
        "DateUtc": "2025-01-15 19:45:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Bournemouth",
        "HomeTeamScore": 2,
        "AwayTeamScore": 2
    },
    {
        "MatchNumber": 22,
        "RoundNumber": 22,
        "DateUtc": "2025-01-18 15:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Wolves",
        "HomeTeamScore": 3,
        "AwayTeamScore": 1
    },
    {
        "MatchNumber": 23,
        "RoundNumber": 23,
        "DateUtc": "2025-01-25 15:00:00Z",
        "Location": "Etihad Stadium",
        "HomeTeam": "Man City",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": 3,
        "AwayTeamScore": 1
    },
    {
        "MatchNumber": 24,
        "RoundNumber": 24,
        "DateUtc": "2025-02-01 15:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "West Ham",
        "HomeTeamScore": null,
        "AwayTeamScore": null
    },
    {
        "MatchNumber": 25,
        "RoundNumber": 25,
        "DateUtc": "2025-02-15 15:00:00Z",
        "Location": "American Express Stadium",
        "HomeTeam": "Brighton",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": null,
        "AwayTeamScore": null
    },
    {
        "MatchNumber": 26,
        "RoundNumber": 26,
        "DateUtc": "2025-02-22 15:00:00Z",
        "Location": "Villa Park",
        "HomeTeam": "Aston Villa",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": null,
        "AwayTeamScore": null
    },
    {
        "MatchNumber": 27,
        "RoundNumber": 27,
        "DateUtc": "2025-02-26 19:45:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Southampton",
        "HomeTeamScore": null,
        "AwayTeamScore": null
    },
    {
        "MatchNumber": 28,
        "RoundNumber": 28,
        "DateUtc": "2025-03-08 15:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeamScore": null,
        "HomeTeamScore": null
    },
    {
        "MatchNumber": 29,
        "RoundNumber": 29,
        "DateUtc": "2025-03-15 15:00:00Z",
        "Location": "Emirates Stadium",
        "HomeTeam": "Arsenal",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": null,
        "AwayTeamScore": null
    },
    {
        "MatchNumber": 30,
        "RoundNumber": 30,
        "DateUtc": "2025-04-02 18:45:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Spurs",
        "HomeTeamScore": null,
        "AwayTeamScore": null
    },
    {
        "MatchNumber": 31,
        "RoundNumber": 31,
        "DateUtc": "2025-04-05 14:00:00Z",
        "Location": "Gtech Community Stadium",
        "HomeTeam": "Brentford",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": null,
        "AwayTeamScore": null
    },
    {
        "MatchNumber": 32,
        "RoundNumber": 32,
        "DateUtc": "2025-04-12 14:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Ipswich",
        "HomeTeamScore": null,
        "AwayTeamScore": null
    },
    {
        "MatchNumber": 33,
        "RoundNumber": 33,
        "DateUtc": "2025-04-19 14:00:00Z",
        "Location": "Craven Cottage",
        "HomeTeam": "Fulham",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": null,
        "AwayTeamScore": null
    },
    {
        "MatchNumber": 34,
        "RoundNumber": 34,
        "DateUtc": "2025-04-26 14:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Everton",
        "HomeTeamScore": null,
        "AwayTeamScore": null
    },
    {
        "MatchNumber": 35,
        "RoundNumber": 35,
        "DateUtc": "2025-05-03 14:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Liverpool",
        "HomeTeamScore": null,
        "AwayTeamScore": null
    },
    {
        "MatchNumber": 36,
        "RoundNumber": 36,
        "DateUtc": "2025-05-10 14:00:00Z",
        "Location": "St. James' Park",
        "HomeTeam": "Newcastle",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": null,
        "AwayTeamScore": null
    },
    {
        "MatchNumber": 37,
        "RoundNumber": 37,
        "DateUtc": "2025-05-18 14:00:00Z",
        "Location": "Stamford Bridge",
        "HomeTeam": "Chelsea",
        "AwayTeam": "Man Utd",
        "HomeTeamScore": null,
        "AwayTeamScore": null
    },
    {
        "MatchNumber": 38,
        "RoundNumber": 38,
        "DateUtc": "2025-05-25 15:00:00Z",
        "Location": "The City Ground",
        "HomeTeam": "Nott'm Forest",
        "AwayTeam": "Chelsea",
        "HomeTeamScore": null,
        "AwayTeamScore": null
    }
];

const scorers = [
    { player: "Cole Palmer", goals: 14, assists: 6 },
    { player: "Nicolas Jackson", goals: 9, assists: 5 },
    { player: "Noni Madueke", goals: 7, assists: 3 },
    { player: "Enzo Fernández", goals: 3, assists: 4 },
    { player: "Marc Cucurella", goals: 2, assists: 1 },
    { player: "Christopher Nkunku", goals: 2, assists: 0 },
    { player: "Jadon Sancho", goals: 2, assists: 4 },
    { player: "Tosin Adarabioyo", goals: 1, assists: 1 },
    { player: "Moisés Caicedo", goals: 1, assists: 2 },
    { player: "Axel Disasi", goals: 1, assists: 0 }
];

function generateTable(data) {
    let tableHTML = `<table><thead><tr>`;
    tableHTML += `<th>Joueur</th><th>Buts</th><th>Passes Décisives</th>`;
    tableHTML += `</tr></thead><tbody>`;

    // Limiter à 5 joueurs
    const topPlayers = data.slice(0, 5);

    topPlayers.forEach(item => {
        tableHTML += `<tr>
            <td>${item.player}</td>
            <td>${item.goals}</td>
            <td>${item.assists}</td>
        </tr>`;
    });

    tableHTML += `</tbody></table>`;
    return tableHTML;
}

document.getElementById('tables-container').innerHTML = `
    ${generateTable(scorers)}
`;

function displayLastMatches() {
    const lastMatchesTableBody = document.getElementById('lastMatchesTableBody');
    const currentDate = new Date(); // Utiliser la date actuelle
    const pastMatches = calendrier.filter(match => new Date(match.DateUtc) < currentDate)
                                   .sort((a, b) => new Date(b.DateUtc) - new Date(a.DateUtc))
                                   .slice(0, 5); // Prendre les 5 derniers matchs

    let victoires = 0;
    let nuls = 0;
    let defaites = 0;

    pastMatches.forEach(match => {
        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        dateCell.innerText = new Date(match.DateUtc).toLocaleDateString('fr-FR');
        row.appendChild(dateCell);

        const matchCell = document.createElement('td');
        matchCell.innerText = `${match.HomeTeam} vs ${match.AwayTeam}`;
        row.appendChild(matchCell);

        const resultCell = document.createElement('td');
        let result;

        // Déterminer le résultat en fonction de l'équipe à domicile ou à l'extérieur
        if (match.HomeTeam === "Chelsea") {
            result = match.HomeTeamScore > match.AwayTeamScore ? 'Victoire' :
                     match.HomeTeamScore < match.AwayTeamScore ? 'Défaite' : 'Nul';
        } else {
            result = match.AwayTeamScore > match.HomeTeamScore ? 'Victoire' :
                     match.AwayTeamScore < match.HomeTeamScore ? 'Défaite' : 'Nul';
        }

        resultCell.innerText = result;
        row.appendChild(resultCell);
        lastMatchesTableBody.appendChild(row);

        // Compter les résultats
        if (result === 'Victoire') victoires++;
        else if (result === 'Défaite') defaites++;
        else nuls++;
    });

    // Créer le diagramme pour les 5 derniers matchs
    const ctxLastMatches = document.getElementById('lastMatchesChart').getContext('2d');
    new Chart(ctxLastMatches, {
        type: 'pie',
        data: {
            labels: ['Victoires', 'Nuls', 'Défaites'],
            datasets: [{
                data: [victoires, nuls, defaites],
                backgroundColor: ['#0056b3', '#d4af37', '#333'], // Couleurs personnalisées
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
            }
        }
    });
}

function displayStats() {
    const statsTableBody = document.getElementById('statsTableBody');
    let victoires = 0;
    let nuls = 0;
    let defaites = 0;

    // Filtrer les matchs joués
    const playedMatches = calendrier.filter(match => match.HomeTeamScore !== null && match.AwayTeamScore !== null);

    playedMatches.forEach(match => {
        if (match.HomeTeam === "Chelsea") {
            if (match.HomeTeamScore > match.AwayTeamScore) victoires++;
            else if (match.HomeTeamScore < match.AwayTeamScore) defaites++;
            else nuls++;
        } else {
            if (match.AwayTeamScore > match.HomeTeamScore) victoires++;
            else if (match.AwayTeamScore < match.HomeTeamScore) defaites++;
            else nuls++;
        }
    });

    // Afficher les statistiques dans le tableau
    statsTableBody.innerHTML = `
        <tr><td>Victoires</td><td>${victoires}</td></tr>
        <tr><td>Nuls</td><td>${nuls}</td></tr>
        <tr><td>Défaites</td><td>${defaites}</td></tr>
    `;

    // Créer le diagramme pour l'ensemble des matchs joués
    const ctxStats = document.getElementById('statsChart').getContext('2d');
    new Chart(ctxStats, {
        type: 'pie',
        data: {
            labels: ['Victoires', 'Nuls', 'Défaites'],
            datasets: [{
                data: [victoires, nuls, defaites],
                backgroundColor: ['#0056b3', '#d4af37', '#333'], // Couleurs personnalisées
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayLastMatches();
    displayStats();
});
