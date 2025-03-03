document.addEventListener("DOMContentLoaded", function() {
    const calendrier = [
        { date: "10 mars 2024", adversaire: "Liverpool", lieu: "Anfield" },
        { date: "17 mars 2024", adversaire: "Arsenal", lieu: "Etihad Stadium" },
        { date: "24 mars 2024", adversaire: "Chelsea", lieu: "Stamford Bridge" }
    ];

    const calendrierSection = document.createElement("section");
    calendrierSection.innerHTML = "<h2>Calendrier des matchs</h2>";

    const ul = document.createElement("ul");

    calendrier.forEach(match => {
        const li = document.createElement("li");
        li.textContent = `${match.date} - ${match.adversaire} (${match.lieu})`;
        ul.appendChild(li);
    });

    calendrierSection.appendChild(ul);
    document.body.appendChild(calendrierSection);
});
