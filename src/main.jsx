import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/about", element: <AboutPage /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
