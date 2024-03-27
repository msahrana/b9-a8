import {useEffect, useState} from "react";
import {getWishFromLocalStorage} from "../../utility/localStorage";
import ListedBookCard from "../../pages/ListedBooks/ListedBookCard";

const Wishlist = () => {
  const [listedBooks, setListedBooks] = useState([]);

  useEffect(() => {
    setListedBooks(getWishFromLocalStorage());
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

export default Wishlist;
