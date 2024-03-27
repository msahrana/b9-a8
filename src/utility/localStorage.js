import swal from "sweetalert";

export const getFromLocalStorage = () => {
  const book = JSON.parse(localStorage.getItem("read")) || [];
  return book;
};

export const getWishFromLocalStorage = () => {
  const book = JSON.parse(localStorage.getItem("wishlist")) || [];
  return book;
};

export const saveToLocalStorage = (book) => {
  const saveBook = JSON.parse(localStorage.getItem("read")) || [];
  const isRead = saveBook.find((item) => item.id == book.id);
  if (!isRead) {
    saveBook.push(book);
    localStorage.setItem("read", JSON.stringify(saveBook));
    swal("Good job!", "You read this book completely!", "success");
    return;
  } else {
    swal("Sorry!", "Already exist!", "error");
    return;
  }
};

export const saveLocalStorage = (booked) => {
  const saveBooked = JSON.parse(localStorage.getItem("wishlist")) || [];
  const saveBook = JSON.parse(localStorage.getItem("read")) || [];
  const isWish = saveBooked.find((items) => items.id == booked.id);
  const isRead = saveBook.find((item) => item.id == booked.id);
  if (!isWish && !isRead) {
    saveBooked.push(booked);
    localStorage.setItem("wishlist", JSON.stringify(saveBooked));
    swal("Good job!", "You Wishes this book completely!", "success");
    return;
  } else {
    swal("Sorry!", "Already exist!", "error");
    return;
  }
};
