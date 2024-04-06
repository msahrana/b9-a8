import {Link} from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-[#1313130d] p-10 rounded-md">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:mr-56">
          <h1 className="lg:text-6xl font-bold">
            Books to freshen <br />
            up your bookshelf
          </h1>
          <Link to="/books/read">
            <button className="btn bg-[#23be0a] text-white font-semibold text-xl mt-16">
              View The List
            </button>
          </Link>
        </div>
        <div>
          <img
            src="https://i.ibb.co/MhV5FkM/banner.png"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
