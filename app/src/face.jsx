import "./css/face.css";
import { useState } from "react";

export default function Face() {
  const [text, setText] = useState("");

  async function sendToServer(url) {
    fetch("http://localhost:5000/from_face")
        .then(res => res.send(url))
        .then(console.log(url))
  }

  return (
    <div className="h-screen grid grid-cols-1 row-auto justify-items-center content-center text-center bg-gradient-to-b from-cyan-400 to-indigo-950 space-y-10">
      <h1 className="font-arvo font-bold text-stone-50 text-6xl">
        Welcome to the Future of Networking
      </h1>
      <h2 className="font-open-sans text-stone-50 text-4xl">
        Import your LinkedIn To Begin
      </h2>
      <form className="place-self-center place-content-center place-items-stretch space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await fetch("http://localhost:8080/transcript", {
            method: "POST",
            body: JSON.stringify(text),
          });

          const data = await response.json();

          const whatever = await sendToServer(data);
          // do whatever with data right here
          // const sendToServer = await useEffect(() => {
          //   fetch("http://localhost:5000/from_face")
          //       .then(res => res.send(data))
          //       .then(console.log(data))
          // }, [])
          
          setTranscript(data);
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="linkedin-url"
          className="input input-bordered rounded-full w-full max-w-xs"
        />
        <input
          type="button"
          id="submit"
          value="Sign Me Up!"
          className="font-open-sans btn btn-wide rounded-full btn-outline btn-accent hover:btn-accent"
        />
      </form>
    </div>
  );
}


/* from pretty branch
<div className="h-screen grid grid-cols-1 row-auto justify-items-center content-center text-center bg-gradient-to-b from-cyan-400 to-indigo-950 space-y-10">
            <h1 className="font-arvo font-bold text-stone-50 text-6xl">Welcome to the Future of Networking</h1>
            <h2 className="font-open-sans text-stone-50 text-4xl">Import your LinkedIn To Begin</h2>
            <div className="place-self-center place-content-center place-items-stretch space-y-4">
                <input type="text" id="linkedin-url" className=" input input-bordered rounded-full w-full max-w-xs " />
                <input type="button" id="submit" value="Sign Me Up!" className="font-open-sans btn btn-wide rounded-full btn-outline btn-accent hover:btn-accent" />
            </div>
        </div>
*/