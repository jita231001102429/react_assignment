import { Link } from "react-router-dom";

function Dashboard() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status !== "Closed"
  ).length;

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h2>{totalTasks}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="dashboard-card">
          <h2>{pendingTasks}</h2>
          <p>Pending Tasks</p>
        </div>

        <div className="dashboard-card">
          <h2>{completedTasks}</h2>
          <p>Completed Tasks</p>
        </div>
      </div>

      <div className="dashboard-buttons">
        <Link to="/add-task">Add New Task</Link>

        <Link to="/tasks">View All Tasks</Link>

        <Link to="/completed">Completed Tasks</Link>
      </div>
    </div>
  );
}

export default Dashboard;