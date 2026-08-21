var currentDeckList;
$(".copyDeckListDisplay").fadeOut();                    // makes animation smoother later

// event listeners
window.addEventListener("load", constructDeckList);     // when window is loaded
$("#decklist").click(constructDeckList);                // when deck list is changed
$(".copyDeckButton").click(copyDeckList);               // when copy deck button is clicked

// Deck list Constructor
function DeckList(name, deckListImport, imageURL, limitlessLink) {
    this.name = name;
    this.deckListImport = deckListImport;
    this.imageURL = imageURL;
    this.limitlessLink = limitlessLink;
}

// this function creates the displayed deck list
function constructDeckList() {
    $(".imageLink").removeClass("invisible");           // make deck list visible
    $(".copyDeckButton").removeClass("invisible");      // makes copy button visible
    $(".limitlessLink").html("LimitlessTCG");           // creates the text limitless link

    // switch case  to check what deck list the user selects
    switch ($("#decklist").val()) {
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
            $(".imageLink").addClass("invisible");         // make deck list image invisible
            $(".copyDeckButton").addClass("invisible");    // make copy deck list image invisible
            $(".imageLink").attr("href", "");
            $(".limitlessLink").html("");
            $(".decklistConatiner ul").html("");
            $(".deckTitle").html("");
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
    $(".deckTitle").html(decklist.name);
    $(".imageLink").attr("href", decklist.limitlessLink);
    $(".imageLink").removeClass("invisible");
    $(".copyDeckButton").removeClass("invisible");
    $(".decklistImg").attr("src", decklist.imageURL);
    $(".decklistConatiner ul").html(deckListString);
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
    $(".copyDeckListDisplay").removeClass("invisible");     // removes the invisible class from prompt
    $(".copyDeckListDisplay").fadeIn();
    setTimeout(() => {
        $(".copyDeckListDisplay").fadeOut();
    }, 3000);  // Waits for 3000 milliseconds (3 seconds), and fades out

}
