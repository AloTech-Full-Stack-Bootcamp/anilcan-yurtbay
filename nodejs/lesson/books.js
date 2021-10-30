const books = [
    {name : "Kitap1", author: "Yazar1"},
    {name : "Kitap2", author: "Yazar2"},
    {name : "Kitap3", author: "Yazar3"}
]

const listbooks = () => {
    books.map((book) => {
        console.log(book.name);
    });
}

const addBook = (newBook)=>{
    console.log("Kitap ekleniyor.");
    setTimeout(()=>{
        books.push(newBook);
        console.log("Kitap eklendi.")
        listbooks();
    },3000);
}

listbooks();

addBook({name: "Kitap4",author: "Yazar4"});





/*
addBook("Book1", (){
    
});

addBook("Book1",listbooks(){

});

addBook("Book1",function listbooks(){

});

*/