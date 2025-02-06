//the empty library to fill
const myLibrary = [];

const showDialog = document.getElementById("show-dialog")
const dialog = document.getElementsByTagName("dialog")[0];
const closeDialog = document.getElementById("close-dialog");

//the book constructor
function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read

}


//the function to add books to the library
function addBookToLibrary(title, author, numberOfPages, read) {

    
    
    return myLibrary.push({
        title : title,
        author : author,
        numberOfPages : numberOfPages,
        read : read
    })
}


const slayerVolume1 = new Book("Slayers : Volume 1", "Hajime Kanzaka", 300, true);
const slayerVolume2 = new Book("Slayers : Volume 2", "Hajime Kanzaka", 600, false);
const slayerVolume3 = new Book("Slayers : Volume 3", "Hajime Kanzaka", 800, false);
const slayerVolume5 = new Book("Slayers : Volume 5", "Hajime Kanzaka", 900, false);


addBookToLibrary(slayerVolume1.title, slayerVolume1.author, slayerVolume1.numberOfPages, slayerVolume1.read);
addBookToLibrary(slayerVolume2.title, slayerVolume2.author, slayerVolume2.numberOfPages, slayerVolume2.read);

//function to display the books in the library
function displayBooksInLibrary() {

    
    for(let i = 0; i < myLibrary.length; i++) {
        const bookInfo = document.createElement("p");

        bookInfo.innerText = `${myLibrary[i].title} de ${myLibrary[i].author}, nombre de pages : ${myLibrary[i].numberOfPages}, ai-je lu ? : ${myLibrary[i].read}`;
        document.getElementsByTagName("p")[0].appendChild(bookInfo);

    }
}

displayBooksInLibrary();


console.log(myLibrary);
showDialog.addEventListener("click", () => {
    dialog.open = true
})

closeDialog.addEventListener("click", () => {
    dialog.close(addBookToLibrary(slayerVolume5.title, slayerVolume5.author, slayerVolume5.numberOfPages, slayerVolume5.read));
    console.log(dialog.returnValue);
    console.log(myLibrary)
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

