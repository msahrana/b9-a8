const SingleBook = ({book}) => {
  const {image, tags, book_name, author, category, rating} = book;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
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
        <p>By: {author}</p>
        <hr />
        <div>
          <h1>{category}</h1>
          <div>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
