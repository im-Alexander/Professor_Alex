var pokemon = ["Dusclops SFA 19",
    "Dusknoir SFA 20",
    "Budew PRE 4",
    "Crustle DRI 12",
    "Dipplin PRE 10",
    "Teal Mask Ogerpon ex TWM 25",
    "Wellspring Mask Ogerpon ex TWM 64",
    "Mega Lucario ex ASC 113",
    "Lillie's Ribombee JTG 67",
    "Dedenne SSP 87",
    "Munkidori ASC 99",
    "Elgyem BLK 40",
    "Latias ex SSP 76",
    "Alakazam MEG 56",
    "N's Reshiram JTG 116",
    "N's Zekrom ASC 155",
    "Dragapult ex TWM 130",
    "Raging Bolt ex TEF 123",
    "Mega Lopunny ex PFL 84",
    "Slowking SCR 58",
    "Accompanying Flute TWM 142",
    "Unfair Stamp TWM 165"];

var banlistString = "";

for (var i = 0; i < pokemon.length; i++){
    banlistString = banlistString + "<li>" + pokemon[i] + "</li>";
}

document.querySelector(".banlist ul").innerHTML = banlistString;