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

const addBook = async (newBook)=>{
    setTimeout(()=>{
        books.push(newBook);
        return;
    },3000);
}


async function addAndListBooks(){
    await addBook({name:"Kitap5",author:"Yazar5"});
    listbooks();
}