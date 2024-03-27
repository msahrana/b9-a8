import {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import {saveLocalStorage, saveToLocalStorage} from "../../utility/localStorage";

const BookDetails = () => {
  const [bookDetails, setBookDetails] = useState({});
  const books = useLoaderData();
  const {id} = useParams();

  const handleRead = () => {
    saveToLocalStorage(bookDetails);
  };

  const handleWishlist = () => {
    saveLocalStorage(bookDetails);
  };

  useEffect(() => {
    const findBook = books.find((item) => item.id == id);
    setBookDetails(findBook);
  }, [id, books]);

  const {
    image,
    book_name,
    author,
    category,
    review,
    tags,
    total_pages,
    publisher,
    year_of_publishing,
    rating,
  } = bookDetails || "";

  return (
    <div className="h-[500px] my-16 w-full">
      <div className="hero-content flex-col lg:flex-row justify-around">
        <div className="bg-gray-200 rounded-lg p-6">
          <img src={image} className="rounded-lg w-full h-[200px]" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{book_name}</h1>
          <p>By : {author}</p>
          <div className="divider"></div>
          <p>{category}</p>
          <div className="divider"></div>
          <p>
            <span className="font-bold">Review:</span> {review}
          </p>
          <div className="divider"></div>
          <div className="flex space-x-6">
            <h2>
              <span className="font-bold">Tags: </span>
            </h2>
            <p className="text-[#23be0a] bg-[#23be0a0d] rounded-full px-4 py-1 text-base font-semibold">
              {tags?.[0]}
            </p>
            <p className="text-[#23be0a] bg-[#23be0a0d] rounded-full px-4 py-1 text-base font-semibold">
              {tags?.[1]}
            </p>
          </div>
          <div className="divider"></div>
          <div className="space-y-4">
            <p>
              <span>Number of Pages: </span>
              {total_pages}
            </p>
            <p>
              <span>Publisher: </span>
              {publisher}
            </p>
            <p>
              <span>Year of Publishing: </span>
              {year_of_publishing}
            </p>
            <p>
              <span>Rating: </span>
              {rating}
            </p>
          </div>
          <div className="pt-4">
            <button onClick={handleRead} className="btn btn-outline mr-6">
              Read
            </button>
            <button
              onClick={handleWishlist}
              className="btn bg-[#59c6d2] text-white hover:text-black"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
