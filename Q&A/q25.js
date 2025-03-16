var library = [
    {
        title: "Alchemist",
        author: "Paulo Coilo",
        status: true
    },
    {
        
        title:  'The Road Ahead',
        author: 'Bill Gates',
        status: true
    },
    {
        
        title:  'Mockingjay: The Final Book of The Hunger Games',
        author:  'Suzanne Collins',
        status: false
    }
    ];
    
function findReadingStatus(library) {
    library.forEach(book => {
        if (book.status) {
            console.log(`Already read '${book.title}' by ${book.author}`);
        } else {
            console.log(`Not read yet '${book.title}' by ${book.author}`);
        }
    })
}

findReadingStatus(library)