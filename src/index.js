import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"

//component file
import TodoContainer from "./functionBased/TodoContainer"

//stylesheet
import "./functionBased/App.css"

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
    </React.StrictMode>
)