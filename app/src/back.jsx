import { useTranscript } from "./context/Transcript";
import "./css/back.css";
import { fetchAndDisplayResponse } from "./App";

export default function Back() {
  const { response } = fetchAndDisplayResponse();

  return (
    <div class="h-screen bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 flex items-center space-y-10 join join-vertical">
      <div class="box-border align-middle mt-32 h-5/6 w-3/6 p-4 border-4 ...">
        <p class="output mb-3 text-black dark:text-gray-400" id="output1">
          {response}
        </p>
      </div>
    </div>
  );
}
