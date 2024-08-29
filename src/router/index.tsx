import Home from "@/components/Home/Home";
import MainLayout from "@/components/Layouts/MainLayout";
import NotFound from "@/components/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
