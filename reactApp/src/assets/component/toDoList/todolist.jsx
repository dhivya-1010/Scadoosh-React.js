import { useState } from "react";

export default function Todo() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    function handleTask(e) {
        e.preventDefault();

        if (task.trim() === "") return;

        setTodos([
            ...todos,
            {
                text: task,
                completed: false
            }
        ]);

        setCount(count + 1);
        setTask("");
    }

    function toggleChange(idx) {
        const updatedTodos = [...todos];

        if (updatedTodos[idx].completed) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }

        updatedTodos[idx].completed =
            !updatedTodos[idx].completed;

        setTodos(updatedTodos);
    }

    function deleteTask(idx){
        const updatedTodos = todos.filter(( _ ,i) => i!==idx);
        
        setTodos(updatedTodos)
    }
    return (
        <div>
            <h1>To Do List</h1>

            <form onSubmit={handleTask}>
                <input
                    type="text"
                    placeholder="Enter task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <button type="submit">
                    Add Task
                </button>
            </form>

            <h2>Pending Tasks: {count}</h2>

            <ul>
                {todos.map((item, idx) => (
                    <li key={idx}>
                        <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => toggleChange(idx)}
                        />
                        {item.completed ? (
                            <s>{item.text}</s>
                        ) : (
                            item.text
                        )}
                        <button key = {idx} onClick={()=>deleteTask(idx)}> Delete </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}