import {CiLocationOn} from "react-icons/ci";
import {Link} from "react-router-dom";
import {FaUserGroup} from "react-icons/fa6";
import {LiaPagerSolid} from "react-icons/lia";

const ListedBookCard = ({listedBook}) => {
  const {
    image,
    book_name,
    author,
    total_pages,
    rating,
    category,
    tags,
    publisher,
    year_of_publishing,
    id,
  } = listedBook;

  return (
    <div className="container mx-auto p-3 w-2/3 flex flex-col lg:flex-row gap-10 border border-gray-200 rounded-md mb-4">
      <div className="px-10 py-4 bg-gray-200 rounded-lg">
        <img src={image} alt="Shoes" className="rounded-xl w-32" />
      </div>
      <div className="space-y-2">
        <h2 className="card-title">{book_name}</h2>
        <p>By : {author}</p>
        <div className="flex space-x-5 items-center">
          <h3>Tags : </h3>
          <p className="text-[#23be0a] bg-[#23be0a0d] rounded-full px-4 py-1 text-base font-semibold">
            {tags?.[0]}
          </p>
          <p className="text-[#23be0a] bg-[#23be0a0d] rounded-full px-4 py-1 text-base font-semibold">
            {tags?.[1]}
          </p>
          <CiLocationOn />
          <p>Published : {year_of_publishing}</p>
        </div>
        <div className="flex space-x-5 items-center">
          <FaUserGroup />
          <p>Publisher : {publisher}</p>
          <LiaPagerSolid />
          <p>Pages: {total_pages}</p>
        </div>
        <div className="divider"></div>
        <div className="flex space-x-5 items-center">
          <div className="bg-[#328eff26] px-2 py-1 rounded-full">
            <p className="text-[#328EFF]">Category: {category}</p>
          </div>
          <div className="bg-[#ffac3326] px-2 py-1 rounded-full">
            <p className="text-[#ffac33]">Rating: {rating}</p>
          </div>
          <Link to={`/books/${id}`}>
            <button className="bg-[#23be0a] px-2 py-1 rounded-full text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
