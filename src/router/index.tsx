import SignIn from "@/components/Authentication/SignIn";
import SignUp from "@/components/Authentication/SignUp";
import Bookings from "@/components/Bookings/Bookings";
import Home from "@/components/Home/Home";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import MainLayout from "@/components/Layouts/MainLayout";
import NotFound from "@/components/NotFound/NotFound";
import Services from "@/components/Services/Services";
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
        element: (
          <ProtectedRoute>
            <Bookings />
          </ProtectedRoute>
        ),
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
