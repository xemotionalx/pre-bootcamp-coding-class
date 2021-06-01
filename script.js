function reverseCard(selected) {
    var selectedCard = document.getElementById("card-" + selected);
    var imageId = document.getElementById("card__img-" + selected);
    var textId = document.getElementById("card__text-" + selected);
    var listId = document.getElementById("card__links-" + selected);

    imageId.style.display = "none";
    textId.style.display = "none";
    listId.style.display= "block";
    
}