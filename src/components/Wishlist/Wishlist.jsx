import {useContext} from "react";
import ListedBookCard from "../../pages/ListedBooks/ListedBookCard";
import {ListedBookContext} from "../ListedContext/ListedContext";

const Wishlist = () => {
  const {wishBooks} = useContext(ListedBookContext);

  return (
    <div className="mt-20">
      {wishBooks.map((listedBook) => (
        <ListedBookCard
          key={listedBook.id}
          listedBook={listedBook}
        ></ListedBookCard>
      ))}
    </div>
  );
};

export default Wishlist;
