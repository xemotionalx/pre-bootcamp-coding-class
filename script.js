var htmlCardIsFlipped = false;
var cssCardIsFlipped = false;
var javascriptCardIsFlipped = false;
var designCardIsFlipped = false;

function reverseCard(selectedCard) {
    var imageId = document.getElementById("card__img-" + selectedCard);
    var textId = document.getElementById("card__text-" + selectedCard);
    var listId = document.getElementById("card__links-" + selectedCard);
    
    var selectedCardIsFlipped;

    if (selectedCard === "html") {
        selectedCardIsFlipped = htmlCardIsFlipped;
    } else if (selectedCard === "css") {
        selectedCardIsFlipped = cssCardIsFlipped;
    } else if (selectedCard === "javascript") {
        selectedCardIsFlipped = javascriptCardIsFlipped;
    } else if (selectedCard === "design") {
        selectedCardIsFlipped = designCardIsFlipped;
    }

    if (selectedCardIsFlipped === false) {
        imageId.style.display = "none";
        textId.style.display = "none";
        listId.style.display= "block";
    } 

    if (selectedCardIsFlipped === true) {
        imageId.style.display = "block";
        textId.style.display = "block";
        listId.style.display= "none";
    }

    if (selectedCard === "html") {
        htmlCardIsFlipped = !htmlCardIsFlipped;
    } else if (selectedCard === "css") {
        cssCardIsFlipped = !cssCardIsFlipped;
    } else if (selectedCard === "javascript") {
        javascriptCardIsFlipped = !javascriptCardIsFlipped;
    } else if (selectedCard === "design") {
        designCardIsFlipped = !designCardIsFlipped;
    }
}