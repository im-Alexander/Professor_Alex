var pokemon = ["1 Dusclops SFA 19",
    "1 Dusknoir SFA 20",
    "1 Budew PRE 4",
    "1 Crustle DRI 12",
    "1 Dipplin PRE 10",
    "1 Teal Mask Ogerpon ex TWM 25",
    "1 Wellspring Mask Ogerpon ex TWM 64",
    "1 Mega Lucario ex ASC 113",
    "1 Lillie's Ribombee JTG 67",
    "1 Dedenne SSP 87",
    "1 Munkidori ASC 99",
    "1 Elgyem BLK 40",
    "1 Latias ex SSP 76",
    "1 Alakazam MEG 56",
    "1 N's Reshiram JTG 116",
    "1 N's Zekrom ASC 155",
    "1 Dragapult ex TWM 130",
    "1 Raging Bolt ex TEF 123",
    "1 Mega Lopunny ex PFL 84",
    "1 Slowking SCR 58",
    "1 Mega Excadrill ex PBL 65",
    "1 Accompanying Flute TWM 142",
    "1 Unfair Stamp TWM 165"];

var banlistString = "";

for (var i = 0; i < pokemon.length; i++) {
    banlistString = banlistString + "<li>" + pokemon[i] + "</li>";
}

document.querySelector(".banlist ul").innerHTML = banlistString;

/**
"1 Dusclops SFA 19",
"1 Dusknoir SFA 20",
"1 Budew PRE 4",
"1 Crustle DRI 12",
"1 Dipplin PRE 10",
"1 Teal Mask Ogerpon ex TWM 25",
"1 Wellspring Mask Ogerpon ex TWM 64",
"1 Mega Lucario ex ASC 113",
"1 Lillie's Ribombee JTG 67",
"1 Dedenne SSP 87",
"1 Munkidori ASC 99",
"1 Elgyem BLK 40",
"1 Latias ex SSP 76",
"1 Alakazam MEG 56",
"1 N's Reshiram JTG 116",
"1 N's Zekrom ASC 155",
"1 Dragapult ex TWM 130",
"1 Raging Bolt ex TEF 123",
"1 Mega Lopunny ex PFL 84",
"1 Slowking SCR 58",
"1 Mega Excadrill ex PBL 65",
"1 Accompanying Flute TWM 142",
"1 Unfair Stamp TWM 165"
 */