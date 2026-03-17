const dayFilter = document.getElementById("filter-day");
const genreFilter = document.getElementById("filter-genre");
const priceFilter = document.getElementById("filter-price");

function filterEvents() {
    const day = dayFilter.value;
    const genre = genreFilter.value;
    const price = priceFilter.value;

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const cardDay = card.dataset.day;
        const cardGenre = card.dataset.genre;
        const cardPrice = card.dataset.price;

        const matchDay = day === "all" || day === "alldays" || day === cardDay;
        const matchGenre = genre === "all" || genre === "allgenre" || genre === cardGenre;
        const matchPrice =
            price === "all" || price === "allprices" ||
            (price === "free" && cardPrice === "free") ||
            (price === "paid15" && (cardPrice === "free" || cardPrice === "paid15")) ||
            (price === "paid30" && (cardPrice === "free" || cardPrice === "paid15" || cardPrice === "paid30"));

        card.style.display = (matchDay && matchGenre && matchPrice) ? "" : "none";
    });
}

dayFilter.addEventListener("change", filterEvents);
genreFilter.addEventListener("change", filterEvents);
priceFilter.addEventListener("change", filterEvents);