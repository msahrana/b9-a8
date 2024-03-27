import {createBrowserRouter} from "react-router-dom";
import Root from "../../layout/Root/Root";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import ListedBooks from "../../pages/ListedBooks/ListedBooks";
import Pages from "../../pages/Pages/Pages";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Contact from "../../pages/Contact/Contact";
import BookDetails from "../../components/BookDetails/BookDetails";
import Read from "../../components/Read/Read";
import Wishlist from "../../components/Wishlist/Wishlist";

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
        children: [
          {
            path: "read",
            // index: true,
            element: <Read></Read>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/books/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/pages",
        element: <Pages></Pages>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
