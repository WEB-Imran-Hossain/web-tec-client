import { Link } from "react-router-dom";
import logo from "../../../src/assets/images/logo/web-tec-logo.png";

const Header = () => {
  // header menu
  const menu = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/products">PRODUCTS</Link>
      </li>
      <li>
        <Link to="/login">LOG IN</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-xl font-bold flex flex-row items-center justify-around">
        {/* logo and hamberger icon section */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52 rounded-none"
            >
              {menu}
            </ul>
          </div>
          <div>
           <Link to="/">
           <img className="w-44 ml-8 md:ml-36" src={logo} alt="" />
           </Link>
          </div>
        </div>
        {/* desktop menu section */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        {/*login options */}
        <div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="text-4xl rounded-full">
                <img src="" alt="User_Profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-4 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 w-52 text-lg font-semibold rounded-none"
            >
              <li>
                <a className="justify-between"></a>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
              <li>
                <Link>Dashboard</Link>
              </li>
            </ul>
          </div>
      </div>
      </div>
    </>
  );
};

export default Header;
