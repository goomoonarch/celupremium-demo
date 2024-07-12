import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { BuyDescription } from "./components/BuyDescription.jsx";
import { IPhone } from "./components/IPhone.jsx";
import Layout from "./Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "buy-iphone",
        element: <BuyDescription />,
      },
      {
        path: "iphone",
        element: <IPhone />,
      },
      // Puedes agregar más rutas aquí según sea necesario
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
