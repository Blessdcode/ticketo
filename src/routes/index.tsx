import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/page/home/home";
import Event from "@/page/event/event";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "",

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Event />,
      },
    ],
  },
]);
