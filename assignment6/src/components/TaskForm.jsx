import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Academic");
  const [dueDate, setDueDate] = useState("2026-08-28");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description || !dueDate) {
      alert("Please fill all fields");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      priority,
      category,
      raisedAt: new Date().toLocaleString(),
      dueDate,
      status: "Raised"
    };

    onAddTask(newTask);

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setCategory("Academic");
    setDueDate("2026-08-28");

    alert("Task added successfully!");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label>Task Header</label>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task header"
      />

      <label>Task Description</label>

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
      />

      <label>Priority</label>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <label>Category</label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Academic">Academic</option>
        <option value="Personal">Personal</option>
      </select>

      <label>Due Date</label>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;