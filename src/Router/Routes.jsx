import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";

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
    ],
  },
]);
export default router;
