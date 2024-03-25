import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center justify-center items-center mx-auto mt-60">
      <h5 className="text-9xl">404!!!</h5>
      <p className="my-5 text-red-500 font-extrabold">Page Not Found ...</p>
      <Link to="/">
        <button className="bg-[#23be0a] px-3 py-1 rounded-xl text-xl text-white font-semibold">
          GoTo Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
