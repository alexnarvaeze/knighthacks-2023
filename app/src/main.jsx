import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Face from "./face.jsx";
import "./css/index.css";
import Back from "./back.jsx";
import { TranscriptProvider } from "./context/Transcript.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TranscriptProvider>
      <Face></Face>
      <Back></Back>
      <App></App>
    </TranscriptProvider>
  </React.StrictMode>
);
