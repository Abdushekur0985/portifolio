
import { useState } from "react";
import "./todo.css"
function Todo() {
  const [list, setList] = useState([]);
  const [newTasks, setNewTasks] = useState("");

  const addTask = () => {
    if (newTasks.trim() === "") return;
    setList([...list, newTasks]);
    setNewTasks(""); // 
  };
  const deleteTask = (index) => {
    const updatedTasks = list.filter((_, i) => i !== index); // ✅ 
    setList(updatedTasks);                                   // ✅ 
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={newTasks}
        onChange={(e) => setNewTasks(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ol  style={{ listStyle: "none", padding: 10 }}>
        {list.map((task, index) => (
          <li key={index}>{task}  
          <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
          
      </ol>
    </div>
  );
}

export default Todo;
