import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/page/home/home";
import Event from "@/page/event/event";
import  NotFound from "@/page/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound/>,

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
