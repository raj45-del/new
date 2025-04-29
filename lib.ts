enum BookStatus{
    Available="Available",
    CheckedOut="CheckedOut",
    Reserved="Reserved"
}
type Book = {
    title: string
    author: string
    isbn: number
    status: BookStatus
};

function borrowBook(book: Book): string {
    if(book.status=== BookStatus.Available){
        book.status= BookStatus.CheckedOut
        return `Book Borrowed "${book.title}"` 
    }
    else if(book.status===BookStatus.CheckedOut){
        return `Book checkedOut "${book.title}"`
    }
    else{ 
        return `Book reserved "${book.title}" `
    }

}

