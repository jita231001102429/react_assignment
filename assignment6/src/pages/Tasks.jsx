import { useState } from "react";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [filter, setFilter] = useState("All");

  function deleteTask(id) {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );
  }

  function completeTask(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, status: "Closed" }
        : task
    );

    setTasks(updatedTasks);

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") {
      return true;
    }

    if (filter === "Completed") {
      return task.status === "Closed";
    }

    if (filter === "Pending") {
      return task.status !== "Closed";
    }

    if (filter === "High") {
      return task.priority === "High";
    }

    if (filter === "Medium") {
      return task.priority === "Medium";
    }

    if (filter === "Low") {
      return task.priority === "Low";
    }

    return true;
  });

  return (
    <div className="page">
      <h1>Tasks</h1>

      <div className="filter-container">
        <label>Filter:</label>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="no-tasks">No tasks found.</p>
      ) : (
        <div className="tasks-container">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onComplete={completeTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tasks;