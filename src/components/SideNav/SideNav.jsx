import React from "react"
import "./SideNav.scss"

export default function SideNav() {
    return (
        <div className="sidenav">
            <p>ALL BOARDS (2)</p>
            <ul>
                <li>Kanvan board</li>
                <li>Kanvan board</li>
                <li className="active">Kanvan board</li>
                <li>Kanvan board</li>
            </ul>
        </div>
    )
}
