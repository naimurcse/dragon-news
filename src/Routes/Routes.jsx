import { createBrowserRouter } from "react-router";
import About from "../Components/About/About.jsx";
import Root from "../Layout/Root.jsx";
import Home from "./../Components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { path: "/", index: true, Component: Home },
      { path: "/about", Component: About },
    ],
  },
]);
