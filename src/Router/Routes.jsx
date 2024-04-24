import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import ApartmentDetails from "../Pages/ApartmentDetails/ApartmentDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/house/:id",
        element: (
          <PrivetRoute>
            <ApartmentDetails />
          </PrivetRoute>
        ),
        loader: () => fetch("/data/apartments.json"),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/update-profile",
        element: (
          <PrivetRoute>
            <UpdateProfile />
          </PrivetRoute>
        ),
      },
      {
        path: "/blogs",
        element: (
          <PrivetRoute>
            <Blogs />
          </PrivetRoute>
        ),
        loader: () => fetch("/data/blogs.json"),
      },
    ],
  },
]);
export default router;
