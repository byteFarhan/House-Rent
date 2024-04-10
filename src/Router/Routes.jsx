import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <p className="text-lg font-semibold text-red-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          mollitia officiis quod optio animi! Libero quam maxime excepturi iusto
          totam? Similique laborum sint, repudiandae asperiores odio excepturi
          quidem nihil et.
        </p>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <div></div>,
      },
    ],
  },
]);
export default router;
