let books = [
    {
        bookCode: "B01",
        title: "Lap trinh JavaScript",
        category: "Cong nghe",
        price: 120000,
        totalCopies: 3,
        availableCopies: 1,
        shelfLocation: "K01",
        status: "CÒN SÁCH"
    },
    {
        bookCode: "B02",
        title: "Co so du lieu",
        category: "Cong nghe",
        price: 90000,
        totalCopies: 2,
        availableCopies: 2,
        shelfLocation: "K02",
        status: "CÒN SÁCH"
    }
];
let newBook = {
    bookCode: "B03",
    title: "Toan cao cap",
    category: "Giao trinh",
    price: 100000,
    totalCopies: 4,
    availableCopies: 4,
    shelfLocation: "K03",
    status: "CÒN SÁCH"
};

books.push(newBook);
console.log("Da them sach moi:", newBook.title);

for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B01") {
        if (books[i].availableCopies > 0) {
            books[i].availableCopies--;

            if (books[i].availableCopies === 0) {
                books[i].status = "HẾT SÁCH TRÊN KỆ";
            }

            console.log("Muon sach B01 thanh cong");
        } else {
            console.log("Sach B01 da het");
        }
        break;
    }
}

for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B02") {
        books.splice(i, 1);
        console.log("Da thanh ly sach B02");
        break;
    }
}
let totalBooks = 0;
let totalValue = 0;

for (let i = 0; i < books.length; i++) {
    totalBooks += books[i].totalCopies;
    totalValue += books[i].totalCopies * books[i].price;
}

console.log("====================================");
console.log("       BANG KIEM KE THU VIEN        ");
console.log("====================================");

console.table(books);

console.log("====================================");
console.log("Tong so luong sach:", totalBooks);
console.log("Tong gia tri kho:", totalValue, "VND");
console.log("====================================");
