import React from 'react'
import ReactDOM from 'react-dom/client'
import ServerApp from "./ServerApp.jsx"
import App from './App.jsx'
import Face from "./face.jsx"
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServerApp />
    <Face />
    <App />
  </React.StrictMode>,
)
