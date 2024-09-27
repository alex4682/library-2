import { books } from "./books.js";

// ТОП книги за рейтингом
const topList = document.querySelector("#top-books-list");

const topBooks = books
    .map(book => book)  // Копіюємо масив книг
    .sort((a, b) => b.rating - a.rating)  // Сортуємо за рейтингом
    .slice(0, 3);  // Беремо перші 3 книги

const newTop = [];
topBooks.forEach(book => {
    newTop.push(`
    <li style="background-image: url(${book.image});" class="books_item">
    <svg width="23" height="23" class="books_heart_img hidden">
                <use href="images/symbol-defs.svg#icon-heart"></use>
            </svg>
        <div class="books_list_wrap">
            <p class="books_list_rating_text">${book.rating}</p> 
            <svg width="23" height="23" class="books_rating_img">
                <use href="images/symbol-defs.svg#icon-star"></use>
            </svg>
        </div> 
        <div class="books_text_wrap">
            <p class="books_name">${book.bookName}</p>
            <p class="books_author">${book.author}</p>
            <p class="books_year">${book.year}</p>
        </div>
        <div class="card hidden">
            <div class="card-content">
                <button class="card-close-btn">&times;</button>
                <img src="${book.image}" alt="Обложка книги" class="card-img"/>
                <p class="card-genre">Жанр: ${book.genre}</p>
                <div>
                    <h3 class="card-title">${book.bookName}</h3>
                    <p class="card-author">Автор: ${book.author}</p>
                    <p class="card-year">Год: ${book.year}</p>
                    <p class="card-pages">Страницы: ${book.pages}</p>
                </div>
            </div>
        </div>
    </li>`);
});
topList.innerHTML = newTop.join("");

// Нові книги
const newList = document.querySelector("#new-books-list");

const newestBooks = books
    .map(book => book)  // Копіюємо масив книг
    .sort((a, b) => b.year - a.year)  // Сортуємо за роком від новіших до старіших
    .slice(0, 3);  // Беремо перші 3 книги

const newBooks = [];
newestBooks.forEach(book => {
    newBooks.push(`
    <li style="background-image: url(${book.image});" class="books_item">
    <svg width="23" height="23" class="books_heart_img hidden">
                <use href="images/symbol-defs.svg#icon-heart"></use>
            </svg>
        <div class="books_list_wrap">
            <p class="books_list_rating_text">${book.rating}</p> 
            <svg width="23" height="23" class="books_rating_img">
                <use href="images/symbol-defs.svg#icon-star"></use>
            </svg>
        </div> 
        <div class="books_text_wrap">
            <p class="books_name">${book.bookName}</p>
            <p class="books_author">${book.author}</p>
            <p class="books_year">${book.year}</p>
        </div>
        <div class="card hidden">
            <div class="card-content">
                <button class="card-close-btn">&times;</button>
                <img src="${book.image}" alt="Обложка книги" class="card-img"/>
                <p class="card-genre">Жанр: ${book.genre}</p>
                <div>
                    <h3 class="card-title">${book.bookName}</h3>
                    <p class="card-author">Автор: ${book.author}</p>
                    <p class="card-year">Год: ${book.year}</p>
                    <p class="card-pages">Страницы: ${book.pages}</p>
                </div>
            </div>
        </div>
    </li>`);
});
newList.innerHTML = newBooks.join("");

const booksItems = document.querySelectorAll(".books_item");

booksItems.forEach((bookItem, index) => {
    const closeButton = bookItem.querySelector(".card-close-btn");
    const favoriteButton = bookItem.querySelector(".favorite-btn");
    const favoriteIcon = bookItem.querySelector(".favorite-icon");

    if (closeButton) {
        closeButton.addEventListener("click", () => {
            const card = bookItem.querySelector(".card");
            card.classList.add("hidden");
            document.body.classList.remove("no-scroll");
        });
    }

    bookItem.addEventListener("click", (e) => {
        if (e.target !== closeButton) {
            document.querySelectorAll(".card").forEach(card => card.classList.add("hidden"));
            const card = bookItem.querySelector(".card");
            card.classList.remove("hidden");
            document.body.classList.add("no-scroll");
        }
    });
});
