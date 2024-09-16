function loadTeams() {
    fetch('teamsNBA.json')
        .then(response => response.json())
        .then(teams => {
            const container = document.getElementById('teams-container');

            teams.forEach(team => {
                const card = document.createElement('div');
                card.classList.add('team-card');

                const img = document.createElement('img');
                img.src = team.logo;
                img.alt = `${team.name} Logo`;

                const h3 = document.createElement('h3');
                h3.textContent = team.name;

                // Cria o overlay com informações adicionais
                const overlay = document.createElement('div');
                overlay.classList.add('card-overlay');

                const titulo = document.createElement('p');
                titulo.textContent = `${team.titulos} título(s)`;

                const anos = document.createElement('p');
                anos.textContent = `${team.anotitulos}`;

                overlay.appendChild(titulo);
                overlay.appendChild(anos);

                card.appendChild(img);
                card.appendChild(h3);
                card.appendChild(overlay);

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });
}

window.onload = loadTeams;
