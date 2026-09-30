import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

function AddTask() {
  const navigate = useNavigate();

  function addTask(newTask) {
    const existingTasks =
      JSON.parse(localStorage.getItem("tasks")) || [];

    const updatedTasks = [...existingTasks, newTask];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    navigate("/tasks");
  }

  return (
    <div className="page">
      <h1>Add Task</h1>

      <TaskForm onAddTask={addTask} />
    </div>
  );
}

export default AddTask;