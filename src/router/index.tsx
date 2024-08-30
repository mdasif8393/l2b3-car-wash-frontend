import Bookings from "@/components/Bookings/Bookings";
import Home from "@/components/Home/Home";
import MainLayout from "@/components/Layouts/MainLayout";
import NotFound from "@/components/NotFound/NotFound";
import Services from "@/components/Services/Services";
import SignIn from "@/components/SignIn/SignIn";
import SignUp from "@/components/SignUp/SignUp";
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
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
