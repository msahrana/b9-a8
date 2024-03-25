import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              className={({isActive}) =>
                isActive
                  ? "text-[#23be0a] border border-[#23be0a] px-2 py-1 font-semibold rounded-lg"
                  : "font-semibold"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({isActive}) =>
                isActive
                  ? "text-[#23be0a] border border-[#23be0a] px-2 py-1 font-semibold rounded-lg"
                  : "font-semibold"
              }
              to="/books"
            >
              Listed Books
            </NavLink>
            <NavLink
              className={({isActive}) =>
                isActive
                  ? "text-[#23be0a] border border-[#23be0a] px-2 py-1 font-semibold rounded-lg"
                  : "font-semibold"
              }
              to="/pages"
            >
              Pages to Read
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost lg:text-4xl font-bold">
          Book <span className="text-[#23be0a]">Outlet</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-8 items-center">
          <NavLink
            className={({isActive}) =>
              isActive
                ? "text-[#23be0a] text-lg border border-[#23be0a] px-2 py-1 font-bold rounded-lg"
                : "font-bold text-lg"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({isActive}) =>
              isActive
                ? "text-[#23be0a] text-lg border border-[#23be0a] px-2 py-1 font-bold rounded-lg"
                : "font-bold text-lg"
            }
            to="/books"
          >
            Listed Books
          </NavLink>
          <NavLink
            className={({isActive}) =>
              isActive
                ? "text-[#23be0a] text-lg border border-[#23be0a] px-2 py-1 font-bold rounded-lg"
                : "font-bold text-lg"
            }
            to="/pages"
          >
            Pages to Read
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn mr-4 bg-[#23be0a] lg:text-lg text-white">Sign In</a>
        <a className="btn bg-[#59c6d2] lg:text-lg text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
