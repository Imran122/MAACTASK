import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../views/layout/DashboardLayout";
import MainLayout from "../views/layout/MainLayout";
import DashboardHome from "../views/pages/Dashboard/Dashboard";
import HomePage from "../views/pages/HomePgae/HomePage";
import LogIn from "../views/pages/LogIn/LogIn";
import SignUp from "../views/pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/home",
        element: <HomePage></HomePage>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
    ],
  },
  {
    path: "/dashboard",
    /*  element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>, */
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
    ],
  },
]);
export default router;
