import React, { useState } from "react"
import "./CreateTicket.scss"
import { useProject } from "../../context/ProjectContext"
import { v4 as uuidv4 } from "uuid"
import { X } from "react-feather"

export default function CreateTicket({ setShowAddTicket }) {
    const { addTicket } = useProject()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tasks, setTasks] = useState([""])

    return (
        <div className="modal">
            <div className="modal-card">
                <h3 className="heading-l">Add New Task</h3>
                <div
                    className="modal-card-close-btn"
                    onClick={() => setShowAddTicket(false)}
                >
                    <X />
                </div>

                <div className="modal-input-group">
                    <label htmlFor="title" className="body-m">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        placeholder="e.g Take StarWars break"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="modal-input-group">
                    <label htmlFor="description" className="body-m">
                        Description
                    </label>
                    <textarea
                        type="text"
                        id="description"
                        placeholder="e.g get a good opoinion for ones"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="modal-input-group">
                    <label htmlFor="subtasks" className="body-m">
                        Subtasks
                    </label>
                    {tasks.map((task, index) => (
                        <input
                            type="text"
                            id="subtasks"
                            placeholder="e.g get a good opoinion for ones"
                            value={task}
                            onChange={(e) => {
                                tasks[index] = e.target.value
                                setTasks([...tasks])
                            }}
                        />
                    ))}
                    <button
                        onClick={() => {
                            setTasks(tasks.concat(""))
                        }}
                    >
                        + Add new task
                    </button>
                </div>
                <button
                    onClick={() => {
                        setShowAddTicket(false)
                        if (!title || !description) return

                        addTicket({
                            id: uuidv4(),
                            title,
                            description,
                            tasks,
                        })
                    }}
                >
                    Create task
                </button>
            </div>
        </div>
    )
}
