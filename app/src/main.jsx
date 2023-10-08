import React from "react";
import ReactDOM from "react-dom/client";
import { TranscriptProvider } from "./context/Transcript.jsx";
import Face from "./face.jsx";
import Back from "./back.jsx";
import App from "./App.jsx";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TranscriptProvider>
      <Face></Face>
      <Back></Back>
      <App></App>
    </TranscriptProvider>
  </React.StrictMode>
);
