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
