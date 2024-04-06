import {useContext} from "react";
import ListedBookCard from "../../pages/ListedBooks/ListedBookCard";
import {ListedBookContext} from "../ListedContext/ListedContext";

const Read = () => {
  const {readBooks} = useContext(ListedBookContext);

  return (
    <div className="mt-20">
      {readBooks.map((listedBook) => (
        <ListedBookCard
          key={listedBook.id}
          listedBook={listedBook}
        ></ListedBookCard>
      ))}
    </div>
  );
};

export default Read;
