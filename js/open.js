const openBooks = document.querySelector('[data-open="books"]');
const openCustomers = document.querySelector('[data-open="customers"]');
const openRating = document.querySelector('[data-open="rating"]');

const books = document.querySelector("#books");
const customers = document.querySelector("#customers");
const rating = document.querySelector("#rating");

openBooks.addEventListener("click", () => {
    customers.classList.add("hidden");
    rating.classList.add("hidden");
    books.classList.remove("hidden");
});
openCustomers.addEventListener("click", () => {
    customers.classList.remove("hidden");
    rating.classList.add("hidden");
    books.classList.add("hidden");
});
openRating.addEventListener("click", () => {
    customers.classList.add("hidden");
    rating.classList.remove("hidden");
    books.classList.add("hidden")
});

