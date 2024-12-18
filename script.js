// Adding players to the team section dynamically
const teamList = document.getElementById('teamList');
const players = ["Ghana telecommunication university(GTCU)", "University of Ghana(UG)", "University of professional studies Accra(UPSA)", "Central University(CU)", "Accra Technical university(ATU)","Webster university Ghana(WUG)"];

players.forEach(function(player) {
    let listItem = document.createElement('li');
    listItem.textContent = player;
    teamList.appendChild(listItem);
});