import { useTranscript } from "./context/Transcript";
import "./css/back.css";
import { fetchAndDisplayResponse } from "./App";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Back() {
  const [response, setResponse] = useState("");

  function newFetch(){
    fetchAndDisplayResponse()
      .then((res) => res.json())
      .then((data) => setResponse(data));
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-screen bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 flex items-center space-y-10 join join-vertical">
        <div className="box-border align-middle mt-32 h-5/6 w-3/6 p-4 border-4 ...">
          <p className="output mb-3 text-black dark:text-gray-400" id="output1">
            {response}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
