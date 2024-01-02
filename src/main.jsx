import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import About from "./pages/About/About.jsx";
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/about", element: <About /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
