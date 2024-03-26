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
  } = listedBook;

  return (
    <div className="container mx-auto w-2/3 flex flex-col lg:flex-row gap-10 border border-gray-200 rounded-md mb-4">
      <div className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </div>
      <div className="">
        <h2 className="card-title">{book_name}</h2>
        <p>By : {author}</p>
        <div>
          <h3>Tags : </h3>
          <p className="text-[#23be0a] bg-[#23be0a0d] rounded-full px-4 py-1 text-base font-semibold">
            {tags?.[0]}
          </p>
          <p className="text-[#23be0a] bg-[#23be0a0d] rounded-full px-4 py-1 text-base font-semibold">
            {tags?.[1]}
          </p>
        </div>
        <div></div>
        <div className="divider"></div>
        <div></div>
      </div>
    </div>
  );
};

export default ListedBookCard;
