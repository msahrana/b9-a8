import {useState} from "react";
import {FcRating} from "react-icons/fc";
import {Link} from "react-router-dom";

const SingleBook = ({book}) => {
  const {image, tags, book_name, author, category, rating, id} = book;
  const [myBook, setMyBook] = useState([]);

  const handleShow = (book) => {
    setMyBook(...myBook, book);
    console.log(book);
  };

  return (
    <Link to={`/book/${id}`}>
      <div onClick={handleShow} className="card w-96 bg-base-100 shadow-xl">
        <div className="bg-gray-200 p-2 rounded-lg m-6">
          <figure>
            <img src={image} alt="Shoes" className="py-5" />
          </figure>
        </div>
        <div className="flex justify-around">
          <p className="text-[#23be0a] bg-[#23be0a0d] rounded-full px-4 py-1 text-base font-semibold">
            {tags[0]}
          </p>
          <p className="text-[#23be0a] bg-[#23be0a0d] rounded-full px-4 py-1 text-base font-semibold">
            {tags[1]}
          </p>
        </div>
        <div className="card-body">
          <h2 className="text-2xl font-semibold">{book_name}</h2>
          <p>By : {author}</p>
          <hr />
          <div className="flex justify-between">
            <h1 className="font-semibold">{category}</h1>
            <div>
              <p className=" flex gap-2 items-center">
                {rating} <FcRating />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;
