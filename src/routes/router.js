import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
import HomePage from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

export default router;
