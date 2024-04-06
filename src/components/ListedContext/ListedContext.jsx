import {createContext, useEffect, useState} from "react";

export const ListedBookContext = createContext(null);

const ListedContext = ({children}) => {
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
    const storedWishBooks = localStorage.getItem("wishlist");
    if (storedWishBooks) {
      setWishBooks(JSON.parse(storedWishBooks));
    }
  }, []);

  const sortByRating = () => {
    if (tabIndex == 0) {
      const sortedReadBooks = [...readBooks].sort(
        (low, high) => high.rating - low.rating
      );
      setReadBooks(sortedReadBooks);
    } else if (tabIndex == 1) {
      const storedWishBooks = [...wishBooks].sort(
        (low, high) => high.rating - low.rating
      );
      setWishBooks(storedWishBooks);
    }
  };

  const sortByTotalPages = () => {
    if (tabIndex == 0) {
      const sortedReadBooks = [...readBooks].sort(
        (low, high) => high.total_pages - low.total_pages
      );
      setReadBooks(sortedReadBooks);
    } else if (tabIndex == 1) {
      const storedWishBooks = [...wishBooks].sort(
        (low, high) => high.total_pages - low.total_pages
      );
      setWishBooks(storedWishBooks);
    }
  };

  const sortByPublishYear = () => {
    if (tabIndex == 0) {
      const sortedReadBooks = [...readBooks].sort(
        (low, high) => high.year_of_publishing - low.year_of_publishing
      );
      setReadBooks(sortedReadBooks);
    } else if (tabIndex == 1) {
      const storedWishBooks = [...wishBooks].sort(
        (low, high) => high.year_of_publishing - low.year_of_publishing
      );
      setWishBooks(storedWishBooks);
    }
  };

  const payLoad = {
    tabIndex,
    setTabIndex,
    readBooks,
    wishBooks,
    sortByRating,
    sortByTotalPages,
    sortByPublishYear,
  };

  return (
    <ListedBookContext.Provider value={payLoad}>
      {children}
    </ListedBookContext.Provider>
  );
};

export default ListedContext;
