import {
  FaHome,
  FaHouseUser,
  FaList,
  FaStar,
  FaTags,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { NavLink, Outlet } from "react-router-dom";
import { BiSitemap } from "react-icons/bi";
import useDbUser from "../../../components/hooks/useDbUser";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Dashboard = () => {
  const { isDbUser, isDbUserLoading, isDbUserRefetch } = useDbUser();
  const { user, loading } = useContext(AuthContext);
  console.log(isDbUser);
  const isAdmin = isDbUser?.role === "admin";
  const isUser = isDbUser?.role === "user";

  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-[#7EBC12] text-white">
        <ul className="menu p-4 text-xl">
          {isAdmin && (
            <>
            {/* <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHouseUser />
                    Admin Home
                  </NavLink>
            </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/statistics">
                  <GoGraph />
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reviews">
                  <FaStar />
                  Manage Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/coupons">
                  <FaTags />
                  Coupons
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          )}
          {/* All user shared */}
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          {isUser && (
            <>
              <li>
                <NavLink to="/dashboard/myProfile">
                  <FaUserCheck />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addProduct">
                  <BiSitemap />
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myProducts">
                  <FaHome></FaHome>
                  My Products
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
