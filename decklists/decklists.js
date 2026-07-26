var selectedDeckList = document.getElementById("decklist");                 // User selected deck list
var deckListConatiner = document.querySelector(".decklistConatiner");       // deck list div
var deckListImage = document.querySelector(".decklistImg");                 // deck list image
var imageAnchor = document.querySelector(".imageLink");                     // image anchor tag
var unorderedDeckList = document.querySelector(".decklistConatiner ul");    // the unordered list
var builderString = "";     // used to store the deck list

// decklists
// http://my.limitlesstcg.com/shared/6a4f22d29170a933a6a4cb79
var okidogi = [
    "<strong>Pokémon: 19</strong>",
    "3 Okidogi TWM 111",
    "3 Solrock MEG 75",
    "2 Binacle POR 42",
    "2 Barbaracle POR 43",
    "2 Lunatone MEG 74",
    "1 Ethan's Sudowoodo DRI 93",
    "1 Bloodmoon Ursaluna PRE 54",
    "1 Shaymin DRI 10",
    "1 Psyduck ASC 39",
    "1 Moltres PFL 14",
    "1 Patrat CRI 70",
    "1 Genesect SFA 40",
    "<br />",
    "<strong>Trainer: 28</strong>",
    "4 Lillie's Determination MEG 119",
    "4 Tarragon POR 85",
    "3 Gwynn M5 78",
    "3 Boss's Orders ASC 183",
    "4 Fighting Gong MEG 116",
    "4 Poké Pad ASC 198",
    "1 Special Red Card CRI 82",
    "2 Air Balloon ASC 181",
    "3 Battle Cage PFL 85",
    "<br />",
    "<strong>Energy: 13</strong>",
    "8 Fighting Energy MEE 6",
    "4 Prism Energy BLK 86",
    "1 Legacy Energy TWM 167"
];

// http://my.limitlesstcg.com/shared/6a65414b08e61199a0a4a739
var megaDarkrai = [
    "<strong>Pokémon: 17</strong>",
    "3 Toxel PFL 67",
    "2 Toxtricity PFL 68",
    "3 Mega Kangaskhan ex MEG 104",
    "2 Mega Darkrai ex PBL 48",
    "2 Latias ex SSP 76",
    "2 Volcanion ex JTG 31",
    "1 Fezandipiti ex ASC 142",
    "1 Meowth ex POR 62",
    "1 Pecharunt ex SFA 39",
    "<br />",
    "<strong>Trainer: 34</strong>",
    "4 Lillie's Determination ASC 192",
    "4 Team Rocket's Petrel ASC 207",
    "3 Boss's Orders MEG 114",
    "3 Cyrano SSP 170",
    "4 Ultra Ball ASC 213",
    "3 Poké Pad POR 81",
    "2 Night Stretcher ASC 196",
    "2 Team Rocket's Transceiver ASC 209",
    "1 Switch MEG 130",
    "1 Dark Bell PBL 75",
    "1 Secret Box TWM 163",
    "1 Energy Search POR 72",
    "1 Special Red Card CRI 82",
    "1 Lucky Helmet TWM 158",
    "1 Air Balloon ASC 181",
    "2 Team Rocket's Factory ASC 203",
    "<br />",
    "<strong>Energy: 9</strong>",
    "9 Darkness Energy MEE 7"
];

// event listeners
selectedDeckList.addEventListener("click", constructDeckList);      // when deck list is changed
window.addEventListener("load", constructDeckList);                 // on page load

function constructDeckList () {
    var deckListString = "";
    var imageLink = "";
    deckListImage.setAttribute("style", "visibility: visible;");

    switch (selectedDeckList.value) {
        case "okidogi":
            builderString = okidogi;
            imageLink = "http://my.limitlesstcg.com/shared/6a4f22d29170a933a6a4cb79";
            break;

        case "megaDarkrai":
            builderString = megaDarkrai;
            imageLink = "http://my.limitlesstcg.com/shared/6a65414b08e61199a0a4a739";
            break;

        default:
            deckListImage.setAttribute("style", "visibility: hidden;");
            builderString = "";
    }

    for (var i = 0; i < builderString.length; i++) {
        deckListString = deckListString + "<li>" + builderString[i] + "</li>";
    }

    imageAnchor.setAttribute("href", imageLink)
    deckListImage.setAttribute("src", "./decklistImages/" + selectedDeckList.value + ".png");
    unorderedDeckList.innerHTML = deckListString;
}
