document.addEventListener("DOMContentLoaded", function() {
    const calendrier = [
        { date: "10 mars 2024", adversaire: "Liverpool", lieu: "Anfield" },
        { date: "17 mars 2024", adversaire: "Arsenal", lieu: "Etihad Stadium" },
        { date: "24 mars 2024", adversaire: "Chelsea", lieu: "Stamford Bridge" },
        { date: "31 mars 2024", adversaire: "Tottenham", lieu: "Etihad Stadium" },
        { date: "7 avril 2024", adversaire: "Manchester United", lieu: "Old Trafford" },
        { date: "14 avril 2024", adversaire: "Leicester City", lieu: "Etihad Stadium" },
        { date: "21 avril 2024", adversaire: "West Ham", lieu: "London Stadium" },
        { date: "28 avril 2024", adversaire: "Newcastle", lieu: "Etihad Stadium" }
    ];

    const calendrierSection = document.createElement("section");
    calendrierSection.innerHTML = "<h2>Calendrier des matchs</h2>";

    // Création du tableau
    const table = document.createElement("table");

    // Ajout des en-têtes du tableau
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const thDate = document.createElement("th");
    thDate.textContent = "Date";
    headerRow.appendChild(thDate);

    const thAdversaire = document.createElement("th");
    thAdversaire.textContent = "Adversaire";
    headerRow.appendChild(thAdversaire);

    const thLieu = document.createElement("th");
    thLieu.textContent = "Lieu";
    headerRow.appendChild(thLieu);

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Création du corps du tableau
    const tbody = document.createElement("tbody");

    calendrier.forEach(match => {
        const row = document.createElement("tr");

        const tdDate = document.createElement("td");
        tdDate.textContent = match.date;
        row.appendChild(tdDate);

        const tdAdversaire = document.createElement("td");
        tdAdversaire.textContent = match.adversaire;
        row.appendChild(tdAdversaire);

        const tdLieu = document.createElement("td");
        tdLieu.textContent = match.lieu;
        row.appendChild(tdLieu);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    calendrierSection.appendChild(table);
    document.getElementById("calendrier-container").appendChild(calendrierSection);
});
