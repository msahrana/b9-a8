export const getFromLocalStorage = () => {
  const book = JSON.parse(localStorage.getItem("listed")) || [];
  return book;
};

export const saveToLocalStorage = (book) => {
  console.log(book);
  const saveBook = JSON.parse(localStorage.getItem("listed")) || [];
  console.log(saveBook);
  const isExist = saveBook.find((item) => item.id == book.id);
  if (!isExist) {
    saveBook.push(book);
    localStorage.setItem("listed", JSON.stringify(saveBook));
    alert("Added successfully to localStorage");
  } else {
    alert("Already save this item");
  }
};
