import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/Routes/Routes";
import ListedContext from "./components/ListedContext/ListedContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ListedContext>
      <RouterProvider router={router} />
    </ListedContext>
  </React.StrictMode>
);
