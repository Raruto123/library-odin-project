//the empty library to fill
const myLibrary = [];

const showDialog = document.getElementById("show-dialog")
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
    this.read = read

}


//the function to add books to the library
function addBookToLibrary(title, author, numberOfPages, read) {

    
    
    myLibrary.push({
        title : title,
        author : author,
        numberOfPages : numberOfPages,
        read : read
    })

}

// const slayerVolume1 = new Book("Slayers : Volume 1", "Hajime Kanzaka", 300, true);
// const slayerVolume2 = new Book("Slayers : Volume 2", "Hajime Kanzaka", 600, false);
// const slayerVolume3 = new Book("Slayers : Volume 3", "Hajime Kanzaka", 800, false);
// const slayerVolume5 = new Book("Slayers : Volume 5", "Hajime Kanzaka", 900, false);

//function to display the books in the library
function displayBooksInLibrary() {

    
    // for(let i = 0; i < myLibrary.length; i++) {
    //     const bookInfo = document.createElement("p");

    //     if (i >= 1 ) {
    //         bookInfo.innerText = `${myLibrary[i].title} de ${myLibrary[i].author}, nombre de pages : ${myLibrary[i].numberOfPages}, ai-je lu ? : ${myLibrary[i].read}`;
    //         listParagraph[0].appendChild(bookInfo);
    //     } else {
    //         bookInfo.innerText = `${myLibrary[i].title} de ${myLibrary[i].author}, nombre de pages : ${myLibrary[i].numberOfPages}, ai-je lu ? : ${myLibrary[i].read}`;
    //         listParagraph[0].appendChild(bookInfo);
    //     }

    // }

    const container = document.getElementById("library-container"); // Sélection du conteneur
    const bookInfo = document.createElement("p");
    for (let i = 0; i < myLibrary.length; i++) {  // `<` au lieu de `<=`
        bookInfo.innerText = `${myLibrary[i].title} de ${myLibrary[i].author}, nombre de pages : ${myLibrary[i].numberOfPages}, ai-je lu ? : ${myLibrary[i].read}`;
        
        container.appendChild(bookInfo); // Ajouter le livre au conteneur
    }
}

console.log(myLibrary);
showDialog.addEventListener("click", () => {
    dialog.open = true
})

closeDialog.addEventListener("click", () => {
    const test = {
        title : bookTitle.value
    }
    dialog.close(addBookToLibrary(test.title));
    displayBooksInLibrary();
    console.log(myLibrary);

})
// function addBookToLibrary() {

//     const newBookFromConstructor = new Book("Slayers : V1", "Hajime Kanzaka", 300, true);
//     const newBookFromConstructor2 = new Book("Slayers : V1", "Hajime Kanzaka", 300, true);


//     const newBook = myLibrary.push({
//         newBookFromConstructor,
//         newBookFromConstructor2
//     });

// };

// addBookToLibrary();
// console.log(myLibrary);

