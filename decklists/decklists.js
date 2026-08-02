var selectedDeckList = document.getElementById("decklist");                 // User selected deck list
var deckTitle = document.querySelector(".deckTitle");                       // h3 deck title
var deckListImage = document.querySelector(".decklistImg");                 // deck list image
var imageAnchor = document.querySelector(".imageLink");                     // image anchor tag
var unorderedDeckList = document.querySelector(".decklistConatiner ul");    // the unordered list
var limitlessTextLink = document.querySelector(".limitlessLink");           // the limitless TCG text link under image
var copyDeckButton = document.querySelector(".copyDeckButton");             // the copy deck list button
var currentDeckList;
var builderString = "";     // used to store the deck list

// deck lists
var okidogi = new DeckList("Okidogi Barbaracle",
    ["<strong>Pokémon: 19</strong>",
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
        "3 Gwynn PBL 78",
        "3 Boss's Orders ASC 183",
        "4 Fighting Gong MEG 116",
        "4 Poké Pad ASC 198",
        "1 Special Red Card CRI ",
        "2 Air Balloon ASC 181",
        "3 Battle Cage PFL 85",
        "<br />",
        "<strong>Energy: 13</strong>",
        "8 Fighting Energy MEE 6",
        "4 Prism Energy BLK 86",
        "1 Legacy Energy TWM 167"],
    "./decklistImages/okidogi.png",
    "http://my.limitlesstcg.com/shared/6a4f22d29170a933a6a4cb79"
);

var megaDarkrai = new DeckList("Mega Darkrai ex burn",
    ["<strong>Pokémon: 17</strong>",
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
        "9 Darkness Energy MEE 7"],
    "./decklistImages/megaDarkrai.png",
    "http://my.limitlesstcg.com/shared/6a65414b08e61199a0a4a739"
);

// event listeners
selectedDeckList.addEventListener("click", constructDeckList);      // when deck list is changed
window.addEventListener("load", constructDeckList);                 // on page load
copyDeckButton.addEventListener("click", copyDeckList);             // when the copy deck list button is clicked

// Deck list Constructor
function DeckList(name, deckListImport, imageURL, limitlessLink) {
    this.name = name;
    this.deckListImport = deckListImport;
    this.imageURL = imageURL;
    this.limitlessLink = limitlessLink;
}

// this function creates the displayed deck list
function constructDeckList() {
    deckListImage.setAttribute("style", "visibility: visible;");    // make deck list image visible
    limitlessTextLink.innerHTML = "LimitlessTCG";                   // creates the text limitless link

    // switch case  to check what deck list the user selects
    switch (selectedDeckList.value) {
        case "okidogi":
            displayDeckList(okidogi);
            currentDeckList = okidogi;
            break;

        case "megaDarkrai":
            displayDeckList(megaDarkrai);
            currentDeckList = megaDarkrai;
            break;

        // default case when no deck list is selected
        default:
            deckListImage.setAttribute("style", "display: none;");
            copyDeckButton.setAttribute("style", "display: none;");
            imageAnchor.setAttribute("href", "");
            limitlessTextLink.innerHTML = "";
            unorderedDeckList.innerHTML = "";
            deckTitle.innerHTML = "";
            break;
    }
}

function displayDeckList(decklist) {
    // this builds the deck list string
    var deckListString = "";
    // adds all pokemon to deck list
    for (var i = 0; i < decklist.deckListImport.length; i++) {
        deckListString = deckListString + "<li>" + decklist.deckListImport[i] + "</li>";
    }

    // displays all the elements on screen
    deckTitle.innerHTML = decklist.name;
    imageAnchor.setAttribute("href", decklist.limitlessLink);
    deckListImage.setAttribute("style", "display: unset;");
    copyDeckButton.setAttribute("style", "display: unset;");
    deckListImage.setAttribute("src", decklist.imageURL);
    unorderedDeckList.innerHTML = deckListString;
}

function copyDeckList() {
    var copyString = "";                      // copies the unordered list (deck list)
    var newText = "";                         // new variable to replace all html elements from the user copy

    // for loop to build the string
    for (var i = 0; i < currentDeckList.deckListImport.length; i++) {
        copyString = copyString + currentDeckList.deckListImport[i] + "\n";
    }

    // removes all extra html elements from list
    newText = copyString.replaceAll("<strong>", "");
    copyString = newText;
    newText = copyString.replaceAll("</strong>", "");
    copyString = newText;
    newText = copyString.replaceAll("<br />", "");

    // adds the final string to the clipboard and prompts the user
    navigator.clipboard.writeText(newText);
    alert("Copied deck list!");
}