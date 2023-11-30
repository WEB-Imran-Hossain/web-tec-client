import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home";
import NotFound from "../Pages/SharedPage/NotFound";
import Products from "../Pages/ProductsPage/Products";
import Login from "../Pages/LoginPage/Login";
import Registration from "../Pages/RegistrationPage/Registration";
import About from "../Pages/AboutPage/About";
import Contact from "../Pages/ContactPage/Contact";
import Dashboard from "../Pages/DashBoardPage/DashBoardUser/Dashboard";
import AllUsers from "../Pages/DashBoardPage/AllUsersPage/AllUsers";
import FeaturedProduct from "../Pages/FeaturedProductPage/FeaturedProduct";
import FeaturedProductDetails from "../Pages/FeaturedProductPage/FeaturedProductDetails";
import PrivateRoutes from "./PrivateRoutes";
import TrendingProducts from "../Pages/TrendingProductPage/TrendingProducts";
import TrendingProductDetails from "../Pages/TrendingProductPage/TrendingProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/products",
                element: <Products></Products>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/featuredDetails/:id",
                element: <PrivateRoutes><FeaturedProductDetails></FeaturedProductDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_serverURL}/featured/${params.id}`)
            },
            {
                path: "/trendingDetails/:id",
                element: <PrivateRoutes><TrendingProductDetails></TrendingProductDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_serverURL}/trending/${params.id}`)
            },
        ]
    },
    {

        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            // admin users
            {
                path: "allUsers",
                element: <AllUsers></AllUsers>
            }
        ]

    }
]);
