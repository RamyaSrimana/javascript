import { useState } from "react";

function TodoSimple() {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [completed, setCompleted] = useState([]);

    function addTask() {
        if (task.trim() === "") return;
        setTasks([...tasks, task]);
        setTask("");
    }

    function deleteTask(index) {
        // remove task
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        // also remove from completed list (important)
        setCompleted(completed.filter(i => i !== index));
    }
    function toggleComplete(index) {
        if (completed.includes(index)) {
            setCompleted(completed.filter(i => i !== index));
        } else {
            setCompleted([...completed, index]);
        }
    }

    return (
        <>
            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter Task"
            />

            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        style={{
                            textDecoration: completed.includes(index)
                                ? "line-through"
                                : "none"
                        }}
                    >
                        <span onClick={() => toggleComplete(index)}>
                            {task}
                        </span>

                        <button onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoSimple;