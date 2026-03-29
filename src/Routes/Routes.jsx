import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root.jsx";
import About from "../Pages/About/About.jsx";
import Career from "../Pages/Career/Career.jsx";
import CategoryNews from "../Pages/CategoryNews/CategoryNews.jsx";
import Home from "./../Components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { path: "/", index: true, Component: Home },
      { path: "/category/:id", Component: CategoryNews },
    ],
  },
  {
    path: "/career",
    Component: Career,
  },
  {
    path: "/about",
    Component: About,
  },
]);
