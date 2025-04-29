var BookStatus;
(function (BookStatus) {
    BookStatus["Available"] = "Available";
    BookStatus["CheckedOut"] = "CheckedOut";
    BookStatus["Reserved"] = "Reserved";
})(BookStatus || (BookStatus = {}));
function borrowBook(book) {
    if (book.status === BookStatus.Available) {
        book.status = BookStatus.CheckedOut;
        return "Book borrowed \"".concat(book.title, "\".");
    }
    else if (book.status === BookStatus.CheckedOut) {
        return "Already \"".concat(book.title, "\" checked out.");
    }
    else {
        return "\"".concat(book.title, "\" is already Borrowed.");
    }
}
