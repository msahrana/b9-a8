import {createBrowserRouter} from "react-router-dom";
import Root from "../../layout/Root/Root";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import ListedBooks from "../../pages/ListedBooks/ListedBooks";
import Pages from "../../pages/Pages/Pages";
import AboutUs from "../../pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pages",
        element: <Pages></Pages>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
