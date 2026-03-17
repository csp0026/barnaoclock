const dayFilter = document.getElementById("filter-day");
const genreFilter = document.getElementById("filter-genre");
const priceFilter = document.getElementById("filter-price");

function filterEvents() {
    const day = dayFilter.value;
    const genre = genreFilter.value;
    const price = priceFilter.value;
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const matchDay = day === "all" || day === "alldays" || day === card.dataset.day;
        const matchGenre = genre === "all" || genre === "allgenre" || genre === card.dataset.genre;
        const matchPrice =
            price === "all" || price === "allprices" ||
            (price === "free" && card.dataset.price === "free") ||
            (price === "paid15" && ["free", "paid15"].includes(card.dataset.price)) ||
            (price === "paid30" && ["free", "paid15", "paid30"].includes(card.dataset.price));

        if (matchDay && matchGenre && matchPrice) {
            card.style.display = "";
            setTimeout(() => card.style.opacity = "1", 10);
        } else {
            card.style.opacity = "0";
            setTimeout(() => card.style.display = "none", 300);
        }
    });
}

dayFilter.addEventListener("change", filterEvents);
genreFilter.addEventListener("change", filterEvents);
priceFilter.addEventListener("change", filterEvents);