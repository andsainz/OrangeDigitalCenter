import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import Router from "./Router/Router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={Router} />
  </>
);
