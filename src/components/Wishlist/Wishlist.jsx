import ListedBookCard from "../../pages/ListedBooks/ListedBookCard";

const Wishlist = ({books}) => {
  return (
    <div className="mt-20">
      {books.map((listedBook) => (
        <ListedBookCard
          key={listedBook.id}
          listedBook={listedBook}
        ></ListedBookCard>
      ))}
    </div>
  );
};

export default Wishlist;
