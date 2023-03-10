import React from "react"
import { useProject } from "../../context/ProjectContext"
import { ChevronDown } from "react-feather"
import { Menu } from "react-feather"

import "./Navbar.scss"

export default function Navbar({ setShowAddTicket, setShowDropDown }) {
    const { currentProject } = useProject()
    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <Menu />
                <h1>Kanban</h1>
            </div>
            <div className="navbar-heading">
                <h2>{currentProject.title}</h2>
                <div
                    className="navbar-heading-chevron"
                    onClick={() => setShowDropDown(true)}
                >
                    <ChevronDown />
                </div>
            </div>
            <button onClick={() => setShowAddTicket(true)}>
                Add new ticket
            </button>
        </nav>
    )
}
