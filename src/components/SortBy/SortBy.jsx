import {useEffect, useState} from "react";

const SortBy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("read");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const sortByRating = () => {
    const sortedData = [...data].sort((a, b) => a.rating - b.rating);
    setData(sortedData);
  };

  const sortByTotalPages = () => {
    const sortedData = [...data].sort((a, b) => a.total_pages - b.total_pages);
    setData(sortedData);
  };

  const sortByPublishYear = () => {
    const sortedData = [...data].sort(
      (a, b) => a.year_of_publishing - b.year_of_publishing
    );
    setData(sortedData);
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold my-4">Sort to Read</h1>
        <button
          onClick={sortByRating}
          className="bg-green-500 rounded-full px-3 py-1 text-white"
        >
          Sort by Rating
        </button>
        <button
          onClick={sortByTotalPages}
          className="bg-green-500 rounded-full px-3 py-1 text-white"
        >
          Sort by Total Pages
        </button>
        <button
          onClick={sortByPublishYear}
          className="bg-green-500 rounded-full px-3 py-1 text-white"
        >
          Sort by Publish Year
        </button>
      </div>

      <div>
        <h1 className="text-2xl font-semibold my-4">Sort to Wishlist:</h1>
        <button
          onClick={sortByRating}
          className="bg-green-500 rounded-full px-3 py-1 text-white"
        >
          Sort by Rating
        </button>
        <button
          onClick={sortByTotalPages}
          className="bg-green-500 rounded-full px-3 py-1 text-white"
        >
          Sort by Total Pages
        </button>
        <button
          onClick={sortByPublishYear}
          className="bg-green-500 rounded-full px-3 py-1 text-white"
        >
          Sort by Publish Year
        </button>
      </div>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <div>Rating: {item.rating}</div>
            <div>Total Pages: {item.total_page}</div>
            <div>Publish Year: {item.publish_year}</div>
            <img src={item.image} alt="Book cover" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortBy;
