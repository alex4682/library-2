const booksList = document.querySelector("#books_list");

export const books = [
    {
        image: "images/game-of-thrones.jpeg",
        bookName: "Game of Thrones",
        author: "George R. R. Martin",
        year: 1996,
        rating: 4.4,
        genre: "Fantasy",
        pages: 694,
        favourite: 0,
    },
    {
        image: "images/harry-potter.jpeg",
        bookName: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        year: 1997,
        rating: 4.5,
        genre: "Fantasy",
        pages: 223,
        favourite: 0,
    },
    {
        image: "images/lord-of-the-rings.jpeg",
        bookName: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        year: 1967,
        rating: 4.5,
        genre: "Fantasy",
        pages: 1216,
        favourite: 0,
    },
    {
        image: "images/hobbit.jpeg",
        bookName: "The Hobbit",
        author: "J. R. R. Tolkien",
        year: 1937,
        rating: 4.3,
        genre: "Fantasy",
        pages: 310,
        favourite: 0,
    },
    {
        image: "images/at-the-west-front.jpg",
        bookName: "All Quiet on the Western Front",
        author: "Erich Maria Remarque",
        year: 1929,
        rating: 4.5,
        genre: "Historical Fiction",
        pages: 296,
        favourite: 0,
    },
    {
        image: "images/fahrenheit-451.jpg",
        bookName: "Fahrenheit 451",
        author: "Ray Bradbury",
        year: 1953,
        rating: 4.7,
        genre: "Dystopian",
        pages: 194,
        favourite: 0,
    },
    {
        image: "images/little-prince.jpg",
        bookName: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        year: 1943,
        rating: 4.9,
        genre: "Fable",
        pages: 96,
        favourite: 0,
    },
    {
        image: "images/narnia.jpg",
        bookName: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        year: 1950,
        rating: 4.3,
        genre: "Fantasy",
        pages: 208,
        favourite: 0,
    },
    {
        image: "images/harry-potter-2.jpg",
        bookName: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        year: 1998,
        rating: 4.4,
        genre: "Fantasy",
        pages: 251,
        favourite: 0,
    },
];
function renderBooks() {
    const newBooks = books.sort((a, b) => b.favourite - a.favourite).map(book => `
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
                <div class="card-buttons">
                    <button class="btn delete-btn">Видалити</button>
                    <button class="btn favorite-btn">
                        <span class="favorite-icon">${book.favourite ? '♥' : '♡'}</span> 
                        ${book.favourite ? 'В обраному' : 'Додати в обране'}
                    </button>
                    <button class="btn buy-btn">Купить</button>
                </div>
            </div>
        </div>
    </li>`).join("");

    booksList.innerHTML = newBooks;

    const booksItems = document.querySelectorAll(".books_item");
    booksItems.forEach((bookItem, index) => {
        const closeButton = bookItem.querySelector(".card-close-btn");
        const card = bookItem.querySelector(".card");

        if (closeButton) {
            closeButton.addEventListener("click", (e) => {
                e.stopPropagation();
                card.classList.add("hidden");
                document.body.classList.remove("no-scroll");
            });
        }

        bookItem.addEventListener("click", () => {
            document.querySelectorAll(".card").forEach(c => c.classList.add("hidden"));
            card.classList.remove("hidden");
            document.body.classList.add("no-scroll");
        });

        const favouriteBtn = bookItem.querySelector(".favorite-btn");
        const heart = bookItem.querySelector(".books_heart_img");

        // Показуємо серце, якщо книга вже в обраному
        if (books[index].favourite === 1) {
            heart.classList.remove("hidden");
        } else {
            heart.classList.add("hidden");
        }

        favouriteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Зупиняємо поширення події
            books[index].favourite = books[index].favourite === 0 ? 1 : 0;

            if (books[index].favourite === 1) {
                heart.classList.remove("hidden"); // Показуємо серце
                favouriteBtn.querySelector(".favorite-icon").textContent = '♥';
                favouriteBtn.querySelector(".favorite-icon").nextSibling.nodeValue = ' В обраному';
            } else {
                heart.classList.add("hidden"); // Приховуємо серце
                favouriteBtn.querySelector(".favorite-icon").textContent = '♡';
                favouriteBtn.querySelector(".favorite-icon").nextSibling.nodeValue = ' Додати в обране';
            }

            // Повторно рендеримо список для оновлення сортування
            renderBooks();
        });

        // Додаємо логіку для видалення книги
        const deleteBtn = bookItem.querySelector(".delete-btn");

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            books.splice(index, 1);
            document.body.classList.remove("no-scroll");
            renderBooks();
        });
    });

}



renderBooks();

const addBookBtn = document.querySelector("#add-book");
const closeBookModalBtn = document.querySelector("#close-book-modal");
const addBookModal = document.querySelector("#add-book-modal");
const bookForm = document.querySelector("#book-form");

addBookBtn.addEventListener("click", () => {
    addBookModal.classList.remove("hidden");
    document.body.classList.add("no-scroll");
});

closeBookModalBtn.addEventListener("click", () => {
    addBookModal.classList.add("hidden");
    document.body.classList.remove("no-scroll");
});

// Додаємо нову книгу
bookForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Зупиняємо стандартну поведінку форми

    // Отримуємо значення з полів
    const newBook = {
        bookName: document.querySelector("#book-name").value,
        author: document.querySelector("#book-author").value,
        year: document.querySelector("#book-year").value,
        genre: document.querySelector("#book-genre").value,
        pages: document.querySelector("#book-pages").value,
        image: document.querySelector("#book-image").value,
        rating: document.querySelector("#book-rating").value,
        favourite: 0,
    };

    books.push(newBook);

    renderBooks();

    bookForm.reset();

    addBookModal.classList.add("hidden");
    document.body.classList.remove("no-scroll");
});
