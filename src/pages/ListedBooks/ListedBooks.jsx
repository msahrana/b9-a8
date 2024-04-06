import {useEffect, useState} from "react";
import Read from "../../components/Read/Read";
import Wishlist from "../../components/Wishlist/Wishlist";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [readBooks, setReadBooks] = useState([]);
  const [wishBooks, setWishBooks] = useState([]);

  useEffect(() => {
    const storedReadBooks = localStorage.getItem("read");
    if (storedReadBooks) {
      setReadBooks(JSON.parse(storedReadBooks));
    }
  }, []);

  useEffect(() => {
    const storedReadBooks = localStorage.getItem("wishlist");
    if (storedReadBooks) {
      setWishBooks(JSON.parse(storedReadBooks));
    }
  }, []);

  const sortByRating = () => {
    if (tabIndex == 0) {
      const sortedReadBooks = [...readBooks].sort(
        (low, high) => high.rating - low.rating
      );
      setReadBooks(sortedReadBooks);
    } else if (tabIndex == 1) {
      const sortedReadBooks = [...wishBooks].sort(
        (low, high) => high.rating - low.rating
      );
      setWishBooks(sortedReadBooks);
    }
  };

  const sortByTotalPages = () => {
    if (tabIndex == 0) {
      const sortedReadBooks = [...readBooks].sort(
        (low, high) => high.total_pages - low.total_pages
      );
      setReadBooks(sortedReadBooks);
    } else if (tabIndex == 1) {
      const sortedReadBooks = [...wishBooks].sort(
        (low, high) => high.total_pages - low.total_pages
      );
      setWishBooks(sortedReadBooks);
    }
  };

  const sortByPublishYear = () => {
    if (tabIndex == 0) {
      const sortedReadBooks = [...readBooks].sort(
        (low, high) => high.year_of_publishing - low.year_of_publishing
      );
      setReadBooks(sortedReadBooks);
    } else if (tabIndex == 1) {
      const sortedReadBooks = [...wishBooks].sort(
        (low, high) => high.year_of_publishing - low.year_of_publishing
      );
      setWishBooks(sortedReadBooks);
    }
  };

  return (
    <div>
      /read
      <div className="container mx-auto w-2/3 mb-6">
        {/* sort by */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-green-600 text-white text-xl mt-4"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={sortByRating}>
              <a>Rating</a>
            </li>
            <li onClick={sortByTotalPages}>
              <a>Page Number</a>
            </li>
            <li onClick={sortByPublishYear}>
              <a>Published Year</a>
            </li>
          </ul>
        </div>
      </div>
      {/* tabs */}
      <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800 w-2/3 mx-auto">
        <a
          href="#"
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read</span>
        </a>
        <a
          href="#"
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist</span>
        </a>
      </div>
      {tabIndex == 0 && <Read books={readBooks} />}
      {tabIndex == 1 && <Wishlist books={wishBooks} />}
    </div>
  );
};

export default ListedBooks;
