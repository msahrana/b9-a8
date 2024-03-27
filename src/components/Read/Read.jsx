import {useEffect, useState} from "react";
import {getFromLocalStorage} from "../../utility/localStorage";
import ListedBookCard from "../../pages/ListedBooks/ListedBookCard";

const Read = () => {
  const [listedBooks, setListedBooks] = useState([]);

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

export default Read;
