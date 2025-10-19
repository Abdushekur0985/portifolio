import { useState } from "react";
function TodoList() {
  const [tasks, setTasks] = useState([]); // 
  const [newTask, setNewTask] = useState(""); //

  const addTask = () => {
    if (newTask.trim() === "") return; // 
    setTasks([...tasks, newTask]);
    setNewTask(""); // 
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Todo List App</h1>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
