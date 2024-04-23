import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import ApartmentDetails from "../Pages/ApartmentDetails/ApartmentDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <div className="text-5xl font-bold text-center">Error 404</div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/house/:id",
        element: <ApartmentDetails />,
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
    ],
  },
]);
export default router;
