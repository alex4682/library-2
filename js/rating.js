import { books } from "./books.js";
const topList = document.querySelector("#top-books-list");


const topBooks = books
    .map(book => book)
    .sort((a, b) => b.rating - a.rating)
    .splice(0, 3);

const newTop = [];
topBooks.forEach(book => {
    newTop.push(`
        <li style="background-image: url(${book.image});" class="books_item">
            <div class="books_list_wrap">
                <p class="books_list_rating_text">${book.rating}</p> 
                <svg width="23" height="23" class="books_rating_img">
      <use
        href="images/symbol-defs.svg#icon-star"
        width="24"
        height="24"
      ></use>
    </svg>


            </div> 
            <div class="books_text_wrap">
                <p class="books_name">${book.bookName}</p>
                <p class="books_author">${book.author}</p>
                <p class="books_year">${book.year}</p>
            </div>
        </li>`);
});
topList.innerHTML = newTop.join("");



const newList = document.querySelector("#new-books-list");

const newestBooks = books
    .map(book => book)
    .sort((a, b) => b.year - a.year)  // Сортуємо за роком від новіших до старіших
    .splice(0, 3);  // Беремо перші 3 книги

const newBooks = [];
newestBooks.forEach(book => {
    newBooks.push(`
        <li style="background-image: url(${book.image});" class="books_item">
            <div class="books_list_wrap">
                <p class="books_list_rating_text">${book.rating}</p> 
                <svg width="23" height="23" class="books_rating_img">
      <use
        href="images/symbol-defs.svg#icon-star"
        width="24"
        height="24"
      ></use>
    </svg>


            </div> 
            <div class="books_text_wrap">
                <p class="books_name">${book.bookName}</p>
                <p class="books_author">${book.author}</p>
                <p class="books_year">${book.year}</p>
            </div>
        </li>`);
});
newList.innerHTML = newBooks.join("");
