import { Link } from "react-router-dom";

function TaskCard({ task, onDelete, onComplete }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Priority:</strong> {task.priority}
      </p>

      <p>
        <strong>Category:</strong> {task.category}
      </p>

      <p>
        <strong>Due Date:</strong> {task.dueDate}
      </p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <div className="task-buttons">
        <Link to={`/tasks/${task.id}`} className="view-btn">
          View Details
        </Link>

        {task.status !== "Closed" && (
          <button onClick={() => onComplete(task.id)}>
            Complete
          </button>
        )}

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;