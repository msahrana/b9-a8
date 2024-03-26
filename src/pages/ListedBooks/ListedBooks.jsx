import {useEffect, useState} from "react";
import {getFromLocalStorage} from "../../utility/localStorage";
import ListedBookCard from "./ListedBookCard";

const ListedBooks = () => {
  const [listedBooks, setListedBooks] = useState([]);
  console.log(listedBooks);

  useEffect(() => {
    setListedBooks(getFromLocalStorage());
  }, []);

  return (
    <div className="mt-20">
      {listedBooks.map((listedBook) => (
        <ListedBookCard
          key={listedBook.id}
          listedBook={listedBook}
        ></ListedBookCard>
      ))}
    </div>
  );
};

export default ListedBooks;
