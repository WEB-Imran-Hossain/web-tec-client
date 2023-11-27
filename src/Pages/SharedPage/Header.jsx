import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/web-tec-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const userLocation = useLocation();
  const userNavigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Logout Sucessfully",
          showConfirmButton: false,
          timer: 1500
        });
        userNavigate(userLocation.state ? userLocation.state : "/");
      })
      .catch((error) => console.error(error));
  };

  // header menu
  const menu = (
    <>
      <li>
        <Link className="hover:text-[#7EBC12]" to="/">HOME</Link>
      </li>
      <li>
        <Link className="hover:text-[#7EBC12]" to="/products">PRODUCTS</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 text-xl font-bold flex flex-row items-center justify-around text-[#7EBC12] p-5 bg-[#1D2833]">
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
          <ul className="menu menu-horizontal px-1 text-white">{menu}</ul>
        </div>
        {/*login options */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            {
              user ? (
                <>
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </>
              ) : <>
                <Link to="/login">
                  <div className="text-4xl dropdown dropdown-end">
                    <FaUserCircle></FaUserCircle>
                  </div>
                </Link>
              </>

            }
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <div className="justify-between">
                {user?.displayName}
              </div>
            </li>
            <li><Link>Dashboard</Link></li>
            <li onClick={handleLogOut}><Link>Logout</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
