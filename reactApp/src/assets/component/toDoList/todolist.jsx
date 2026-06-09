import { useState } from "react";

export default function Todo() {
    const [task, settask] = useState("");
    const [todo, settodo] = useState([]);

    function handleToDo(value) {
        settask(value);
    }

    function handleTask(e) {
        e.preventDefault();

        // if (task.trim() === "") return;

        settodo([...todo, task]);
        settask("");
    }

    return (
        <div>
            <h1>To Do List</h1>

            <form onSubmit={handleTask}>
                <input
                    type="text"
                    placeholder="Enter task"
                    value={task}
                    onChange={(e) => handleToDo(e.target.value)}
                />

                <button type="submit">
                    Add Task
                </button>
            </form>

            <ul>
                {todo.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
}