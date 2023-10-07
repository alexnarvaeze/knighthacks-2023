import "./css/face.css"

export default function Face() {
    return (
        <div class="h-screen grid grid-cols-1 row-auto justify-items-center content-center text-center bg-gradient-to-b from-cyan-400 to-indigo-950 space-y-10">
            <h1 class="font-arvo font-bold text-stone-50 text-6xl">Welcome to the Future of Networking</h1>
            <h2 class="font-open-sans text-stone-50 text-4xl">Import your LinkedIn To Begin</h2>
            <div class="place-self-center place-content-center place-items-stretch space-y-4">
                <input type="text" id="linkedin-url" class=" input input-bordered rounded-full w-full max-w-xs " />
                <input type="button" id="submit" value="Sign Me Up!" class="font-open-sans btn btn-wide rounded-full btn-outline btn-accent hover:btn-accent" />
            </div>
        </div>
    )
}