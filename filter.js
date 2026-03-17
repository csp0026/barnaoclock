const dayFilter = document.getElementById("filter-day");
const genreFilter = document.getElementById("filter-genre");
const priceFilter = document.getElementById("filter-price");

const events = document.querySelectorAll(".card");

function filterEvents() {

    const day = dayFilter.value;
    const genre = genreFilter.value;
    const price = priceFilter.value;

    events.forEach(event => {

        const eventDay = event.dataset.day;
        const eventGenre = event.dataset.genre;
        const eventPrice = event.dataset.price;

        const showDay = day === "all" || day === "alldays" || day === eventDay;
        const showGenre = genre === "all" || genre === "allgenre" || genre === eventGenre;

        let showPrice =
    price === "all" || price === "allprices" ||
    (price === "free" && eventPrice === "free") ||
    (price === "paid15" && (eventPrice === "free" || eventPrice === "paid15")) ||
    (price === "paid30" && (eventPrice === "free" || eventPrice === "paid15" || eventPrice === "paid30"));

        event.style.display = (showDay && showGenre && showPrice) ? "" : "none";

    });
}

dayFilter.addEventListener("change", filterEvents);
genreFilter.addEventListener("change", filterEvents);
priceFilter.addEventListener("change", filterEvents);