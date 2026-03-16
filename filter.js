const dayFilter = document.getElementById("filter-day");
const genreFilter = document.getElementById("filter-genre");
const priceFilter = document.getElementById("filter-price");

const events = document.querySelectorAll(".card");

function filterEvents(){

let day = dayFilter.value;
let genre = genreFilter.value;
let price = priceFilter.value;

events.forEach(event => {

let eventDay = event.dataset.day;
let eventGenre = event.dataset.genre;
let eventPrice = event.dataset.price;

let showDay =
day === "all" ||
day === "alldays" ||
day === eventDay;

let showGenre =
genre === "all" ||
genre === "allgenre" ||
genre === eventGenre;

let showPrice = false;

if(price === "all" || price === "allprices"){
showPrice = true;
}

else if(price === "free" && eventPrice === "free"){
showPrice = true;
}

else if(price === "paid15" && (eventPrice === "free" || eventPrice === "paid15")){
showPrice = true;
}

else if(price === "paid30" && (eventPrice === "free" || eventPrice === "paid15" || eventPrice === "paid30")){
showPrice = true;
}

if(showDay && showGenre && showPrice){
event.style.display = "block";
}
else{
event.style.display = "none";
}

});

}

dayFilter.addEventListener("change", filterEvents);
genreFilter.addEventListener("change", filterEvents);
priceFilter.addEventListener("change", filterEvents);
