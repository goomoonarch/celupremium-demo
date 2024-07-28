import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { BuyDescription } from "./components/BuyDescription.jsx";
import { IPhone } from "./components/IPhone.jsx";
import Layout from "./Layout.jsx";
import { BagProvider } from "./context/bag.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "buyiphone/:slug/:variant?",
        element: <BuyDescription />,
      },
      {
        path: "iphone/:familySlug?",
        element: <IPhone />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BagProvider>
      <RouterProvider router={router} />
    </BagProvider>
  </React.StrictMode>
);