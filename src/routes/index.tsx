import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/page/home/home";
import Event from "@/page/event/event";
import NotFound from "@/page/not-found";
import Login from "@/page/auth/login";
import Register from "@/page/auth/register";
import ForgotPasswordPage from "@/components/auth-flow/forgot-password";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Event />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <Register />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
]);
