import {useEffect, useState} from "react";
import SingleBook from "../SingleBook/SingleBook";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h5 className="text-4xl font-bold text-center my-10">All Books Here: </h5>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
        {books.map((book) => (
          <SingleBook key={book.id} book={book}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
