const booksList = document.querySelector("#books_list");
export const books = [
    {
        image: "images/game-of-thrones.jpeg",
        bookName: "Game of Thrones",
        author: "Jorge R. R Martin",
        year: 1996,
        rating: 4.4,
    },
    {
        image: "images/harry-potter.jpeg",
        bookName: "Harry Potter and philosopher's stone",
        author: "J. K. Rowling",
        year: 1997,
        rating: 4.5,
    },
    {
        image: "images/lord-of-the-rings.jpeg",
        bookName: "Lord of the rings",
        author: "J. R. R. Tolkien",
        year: 1967,
        rating: 4.5,
    },
    {
        image: "images/hobbit.jpeg",
        bookName: "The Hobbit",
        author: "J. R. R. Tolkien",
        year: 1937,
        rating: 4.3,
    },
    {
        image: "images/at-the-west-front.jpg",
        bookName: "Nothing new on the east front",
        author: "Erich Maria Remarque",
        year: 1929,
        rating: 4.5,
    },
    {
        image: "images/fahrenheit-451.jpg",
        bookName: "Fahrenheit 451",
        author: "Ray Bradbury",
        year: 1953,
        rating: 4.7,
    },
    {
        image: "images/little-prince.jpg",
        bookName: "The little prince",
        author: "Antoine de Saint-Exupéry",
        year: 1943,
        rating: 4.9,
    },
    {
        image: "images/narnia.jpg",
        bookName: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        year: 1950,
        rating: 4.3,
    },
    {
        image: "images/harry-potter-2.jpg",
        bookName: "Harry Potter and the Chamber of Secrets",
        author: "J.K Rawling",
        year: 1998,
        rating: 4.4,
    },
];

const newBooks = [];
books.forEach(book => {
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

booksList.innerHTML = newBooks.join("");
