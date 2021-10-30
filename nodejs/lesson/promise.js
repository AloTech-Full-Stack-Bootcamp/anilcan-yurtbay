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
    const addBookPromise = new Promise((resolve,reject) => {
        
        try{
            setTimeout(()=>{
                books.push(newBook);
                resolve();
                console.log("Kitap eklendi.")
                listbooks();
            },3000);
        }
        catch(e){
            reject(e);
        }
    });
    return addBookPromise;
}


console.log("Kitap ekleniyor.");
addBook({name: "Kitap4",author: "Yazar4"})
    .then(()=>{
        listbooks();
    })
    .catch((error)=>{
        console.log(error);
    });

