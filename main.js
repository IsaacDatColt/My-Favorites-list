let a = document.createElement("a");
a.href = "http://hackertyper.com/";
a.textContent = "Hack!";

document.body.appendChild(a);

let bookList = document.getElementById("my-favorite-books");
let newBook = document.createElement("li");
newBook.textContent = "Cat in The Hat";
bookList.appendChild(newBook);

