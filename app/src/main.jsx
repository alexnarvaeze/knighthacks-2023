import React from "react";
import ReactDOM from "react-dom/client";
import { TranscriptProvider } from "./context/Transcript.jsx";
import Face from "./face.jsx";
import Back from "./back.jsx";
import App from "./App.jsx";
import "./css/index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Face></Face>,
  },
  {
    path: "back",
    element: <Back></Back>,
  },
]);

//Face is the default by router RouterProvider and back can be accessed through the button
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TranscriptProvider>
      <RouterProvider router={router} />
      <App></App>
    </TranscriptProvider>
  </React.StrictMode>
);
