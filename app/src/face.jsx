import "./css/face.css"

export default function Face() {
    return (
        <div class="h-screen bg-gradient-to-b from-cyan-400 to-indigo-950 flex items-center space-y-10 join join-vertical">
            <input type="text" id="linkedin-url" class="input input-bordered w-full max-w-xs join-item" />
            <button class="btn btn-wide glass join-item">Wide</button>
        </div>
    )
}