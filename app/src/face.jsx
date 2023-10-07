import "./css/face.css"

export default function Face() {
    return (
        <div class="h-screen grid grid-cols-1 row-auto bg-gradient-to-b from-cyan-400 to-indigo-950 space-y-10">
            <h1 class="">Welcome to the Future of Networking</h1>
            <h2 class="">Import your LinkedIn</h2>
            <div class=" place-self-center  place-content-center">
                <input type="text" id="linkedin-url" class=" input input-bordered rounded-full w-full max-w-xs " />
                <button class=" btn btn-wide rounded-full glass">Sign Me Up!</button>
            </div>
        </div>
    )
}