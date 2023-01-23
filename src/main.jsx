import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import ProjectProvider from "./context/ProjectContext"
import "./index.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ProjectProvider>
            <App />
        </ProjectProvider>
    </React.StrictMode>
)
