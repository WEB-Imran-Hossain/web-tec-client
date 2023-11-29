import { FaHome, FaHouseUser, FaList, FaStar, FaTags, FaUsers } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { NavLink, Outlet } from "react-router-dom";
import { BiSitemap } from "react-icons/bi";

const Dashboard = () => {


    // TODO: get data isAdmin value from the database
    const isAdmin = true;
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-[#7EBC12] text-white">
                <ul className="menu p-4 text-xl">
                   {
                    isAdmin ? 
                    <>
                     <li>
                        <NavLink to="/dashboard/adminHome">
                            <FaHouseUser />
                            Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addProducts">
                        <BiSitemap />
                            Add Products
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
                    </li>
                    <li>
                        <NavLink to="/dashboard/allUsers">
                            <FaUsers />
                            All Users
                        </NavLink>
                    </li>
                    </> :
                    <>
                     <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHouseUser />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageUser">
                            <FaUsers />
                            Manage Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/statistics">
                            <GoGraph />
                            Statistics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/coupons">
                            <FaTags />
                            Coupons
                        </NavLink>
                    </li>
                    </>
                   }
                    {/* All user shared */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
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