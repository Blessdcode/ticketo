import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/page/home/home";
import EventsPage from "@/page/event/event";
import NotFound from "@/page/not-found";
import Login from "@/page/auth/login";
import Register from "@/page/auth/register";
import VerifyEmail from "@/components/auth-flow/verify-email";
import ResetPasswordPage from "@/components/auth-flow/reset-password";
import ForgotPasswordPage from "@/components/auth-flow/forgot-password";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "/verify-email",
        element: <VerifyEmail />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
]);
