//the empty library to fill
const myLibrary = [];

//variables and constants
const showDialog = document.getElementById("show-dialog");
const dialog = document.getElementsByTagName("dialog")[0];
const closeDialog = document.getElementById("close-dialog");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");
const listParagraph = document.getElementsByClassName("list-paragraph");

//the book constructor
function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
  this.addBookToLibrary = function () {
    myLibrary.push({
      title: title,
      author: author,
      numberOfPages: numberOfPages,
      read: read,
    })
  }
}

//the function to add books to the library
// function addBookToLibrary(title, author, numberOfPages, read) {
//   myLibrary.push({
//     title: title,
//     author: author,
//     numberOfPages: numberOfPages,
//     read: read,
//   });
// }

const slayerVolume1 = new Book("Slayers : Volume 1", "Hajime Kanzaka", 300, true);
slayerVolume1.ad
// const slayerVolume2 = new Book("Slayers : Volume 2", "Hajime Kanzaka", 600, false);
// const slayerVolume3 = new Book("Slayers : Volume 3", "Hajime Kanzaka", 800, false);
// const slayerVolume5 = new Book("Slayers : Volume 5", "Hajime Kanzaka", 900, false);

//function to display the books in the library
function displayBooksInLibrary() {
  const container = document.getElementById("library-container"); // Sélection du conteneur
  container.innerHTML = ""; // Nettoyer avant d'afficher

  //litst item

  for (let i = 0; i < myLibrary.length; i++) {
    
    const bookInfo = document.createElement("p");
    bookInfo.textContent = `${myLibrary[i].title} de ${myLibrary[i].author}, nombre de pages : ${myLibrary[i].numberOfPages}, ai-je lu ? : ${myLibrary[i].read}`;
    //button to erase book
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer ce livre";
    deleteButton.type = "button";
    deleteButton.dataset.display = i;

    //button to change read's status
    const statusButton = document.createElement("button");
    statusButton.textContent = "📖";
    statusButton.dataset.display = i;

    const bookIndex = parseInt(deleteButton.dataset.display);

    deleteButton.addEventListener("click", () => {
      //quand tu supprimes tous les livres dans le tableau il y a 1 qui reste ce qui cause un décalage
      console.log(bookIndex);
      myLibrary.splice(bookIndex, 1);
      container.removeChild(bookInfo);
      console.log(
        `%c🎨 ⍨ myLibrary après suppression`,
        "color:green; font-weight:bold",
        myLibrary
      );
      displayBooksInLibrary();
    });

    statusButton.addEventListener("click", () => {
      console.log(`%c🎨 ⍨ lu ou pas`, "Your_CSS_Goes_Here")
      !myLibrary[i].read;
      console.log(
        `%c🎨 ⍨ myLibrary après suppression`,
        "color:green; font-weight:bold",
        myLibrary
      );
      displayBooksInLibrary();
    })

    bookInfo.appendChild(deleteButton);
    bookInfo.appendChild(statusButton);
    container.appendChild(bookInfo); // Ajouter le livre au conteneur
  }
}

console.log(myLibrary);
showDialog.addEventListener("click", () => {
  dialog.open = true;
});

closeDialog.addEventListener("click", () => {
  const newBook = new Book(
    title = bookTitle.value,
    author = bookAuthor.value,
    numberOfPages = bookPages.value,
    read = bookRead.checked
  );
  dialog.close(
    // addBookToLibrary(bookDisplayed.title, bookDisplayed.author, bookDisplayed.numberOfPages, bookDisplayed.read);
    newBook.addBookToLibrary(newBook.title, newBook.author, newBook.numberOfPages, newBook.read)
  );
  displayBooksInLibrary();
  console.log(myLibrary);
});
