import ListedBookCard from "../../pages/ListedBooks/ListedBookCard";

const Read = ({books}) => {
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

export default Read;
