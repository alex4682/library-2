import { books } from "./books.js";
import { renderBooks } from "./books.js";

// ТОП книги за рейтингом
const topList = document.querySelector("#top-books-list");
let topBooks = books.slice().sort((a, b) => b.rating - a.rating).slice(0, 3);
renderBooks(topList, topBooks, ".top-books_item");  // Використовуємо окремий клас для топ-книг

// Нові книги
const newList = document.querySelector("#new-books-list");
let newestBooks = books.slice().sort((a, b) => b.year - a.year).slice(0, 3);
renderBooks(newList, newestBooks, ".new-books_item");  // Використовуємо окремий клас для нових книг



const bookForm = document.querySelector("#book-form");

bookForm.addEventListener("submit", () => {
    topBooks = books.slice().sort((a, b) => b.rating - a.rating).slice(0, 3);
    renderBooks(topList, topBooks, ".top-books_item");

    // Оновлюємо список нових книг
    newestBooks = books.slice().sort((a, b) => b.year - a.year).slice(0, 3);
    renderBooks(newList, newestBooks, ".new-books_item");
})