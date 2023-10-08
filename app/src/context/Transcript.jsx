import { Children, createContext, useContext, useState } from "react";

const TranscriptContext = createContext();

export function TranscriptProvider({ children }) {
  const [transcript, setTranscript] = useState("");
  const [chatgptResponse, setchatgptResponse] = useState("");
  return (
    <TranscriptContext.Provider
      value={{ transcript, setTranscript, chatgptResponse, setchatgptResponse }}
    >
      {children}
    </TranscriptContext.Provider>
  );
}

export function useTranscript() {
  const ctx = useContext(TranscriptContext);
  return ctx;
}
