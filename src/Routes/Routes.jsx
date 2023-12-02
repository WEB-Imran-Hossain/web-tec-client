import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home";
import NotFound from "../Pages/SharedPage/NotFound";
import Login from "../Pages/LoginPage/Login";
import Registration from "../Pages/RegistrationPage/Registration";
import About from "../Pages/AboutPage/About";
import Contact from "../Pages/ContactPage/Contact";
import Dashboard from "../Pages/DashBoardPage/DashBoardUser/Dashboard";
import AllUsers from "../Pages/DashBoardPage/AllUsersPage/AllUsers";
import FeaturedProductDetails from "../Pages/FeaturedProductPage/FeaturedProductDetails";
import PrivateRoutes from "./PrivateRoutes";
import TrendingProductDetails from "../Pages/TrendingProductPage/TrendingProductDetails";
import AllProducts from "../Pages/AllProductsPage/AllProducts";
import AllProductDetails from "../Pages/AllProductsPage/AllProductDetails";
import MyProfile from "../Pages/DashBoardPage/MyProfilePage/MyProfile";
import AddProduct from "../Pages/DashBoardPage/AddProductPage/AddProduct";
import MyProduct from "../Pages/DashBoardPage/MyProductPage/MyProduct";
import Membership from "../Pages/Membership/Membership";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/featuredDetails/:id",
        element: (
          <PrivateRoutes>
            <FeaturedProductDetails></FeaturedProductDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_serverURL}/featured/${params.id}`),
      },
      {
        path: "/trendingDetails/:id",
        element: (
          <PrivateRoutes>
            <TrendingProductDetails></TrendingProductDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_serverURL}/trending/${params.id}`),
      },
      {
        path: "/allProductDetails/:id",
        element: (
          <PrivateRoutes>
            <AllProductDetails></AllProductDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_serverURL}/allproducts/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // admin users
      {
        path: "allUsers",
        element: (
          <PrivateRoutes>
            <AllUsers></AllUsers>
          </PrivateRoutes>
        ),
      },
      // my Profile
      {
        path: "myProfile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "membership",
        element: (
          <PrivateRoutes>
            <Membership></Membership>
          </PrivateRoutes>
        ),
      },
      //   add product
      {
        path: "addProduct",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      //   my product
      {
        path: "myProducts",
        element: <MyProduct></MyProduct>,
      },
    ],
  },
]);
