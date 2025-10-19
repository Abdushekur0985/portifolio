import { useState, useEffect } from "react";
import "./mdTodo.css";
function TodoMedium() {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); // track which task is being edited
  const [editingText, setEditingText] = useState("");

  //  Load tasks from localStorage when app starts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setList(savedTasks);
  }, []);

  // making timer for to do list
  const [seconds, setSeconds] = useState(0);
  const minutes = Math.floor(seconds / 60);
const displaySeconds = seconds % 60;

const [time, setTime] = useState(new Date().toLocaleTimeString());

useEffect(() => {
  const interval = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  // 🧹 Cleanup on unmount
  return () => clearInterval(interval);
}, []);
  //  Save tasks to localStorage when list changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(list));
  }, [list]);

  //  Add new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    const newItem = { text: newTask, completed: false };
    setList([...list, newItem]);
    setNewTask("");
  };

  // Delete task
  const deleteTask = (index) => {
    const updated = list.filter((_, i) => i !== index);
    setList(updated);
  };

  //  Toggle complete status
  const toggleComplete = (index) => {
    const updated = list.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setList(updated);
  };

  //  Start editing
  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(list[index].text);
  };

  //  Save edited task
  const saveEdit = (index) => {
    const updated = [...list];
    updated[index].text = editingText;
    setList(updated);
    setEditingIndex(null);
    setEditingText("");
  };

  //  Clear all tasks
  const clearAll = () => setList([]);

  return (
    <div className="todo-container">
      <h1>📝 Todo List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        
        <button onClick={addTask}>Add</button>
        <button className="clear-btn" onClick={clearAll}>
          Clear All
        </button>
      </div>

      <ol className="task-list">
        {list.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />

            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => saveEdit(index)}>Save</button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <div className="btn-group">
                  <button onClick={() => startEditing(index)}>Edit</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
      
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🕒 Live Clock</h1>
      <h2>{time}</h2>
    </div>
    
    </div>
  );
}

export default  TodoMedium;
