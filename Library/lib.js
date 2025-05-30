var BookStatus;
(function (BookStatus) {
    BookStatus["Available"] = "Available";
    BookStatus["CheckedOut"] = "CheckedOut";
    BookStatus["Reserved"] = "Reserved";
})(BookStatus || (BookStatus = {}));
function borrowBook(book) {
    if (book.status === BookStatus.Available) {
        book.status = BookStatus.CheckedOut;
        return "Book Borrowed \"".concat(book.title, "\"");
    }
    else if (book.status === BookStatus.CheckedOut) {
        return "Book checkedOut \"".concat(book.title, "\"");
    }
    else {
        return "Book reserved \"".concat(book.title, "\" ");
    }
}
