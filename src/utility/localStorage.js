import swal from "sweetalert";

export const getFromLocalStorage = () => {
  const book = JSON.parse(localStorage.getItem("read")) || [];
  return book;
};

export const saveToLocalStorage = (book) => {
  console.log(book);
  const saveBook = JSON.parse(localStorage.getItem("read")) || [];
  console.log(saveBook);
  const isExist = saveBook.find((item) => item.id == book.id);
  if (!isExist) {
    saveBook.push(book);
    localStorage.setItem("read", JSON.stringify(saveBook));
    swal("Good job!", "You read this book completely!", "success");
    return;
  } else {
    swal("Sorry!", "Already uou read this type book!", "error");
    return;
  }
};
