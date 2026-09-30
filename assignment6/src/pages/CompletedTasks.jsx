import { Link } from "react-router-dom";

function CompletedTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  );

  return (
    <div className="page">
      <h1>Completed Tasks</h1>

      {completedTasks.length === 0 ? (
        <p>No completed tasks.</p>
      ) : (
        <div className="tasks-container">
          {completedTasks.map((task) => (
            <div className="task-card" key={task.id}>
              <h3>{task.title}</h3>

              <p>{task.description}</p>

              <p>
                <strong>Priority:</strong> {task.priority}
              </p>

              <p>
                <strong>Category:</strong> {task.category}
              </p>

              <p>
                <strong>Status:</strong> Closed
              </p>

              <Link to={`/tasks/${task.id}`}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CompletedTasks;