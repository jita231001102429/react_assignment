import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <h2>Task Manager</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/add-task">Add Task</Link>
        <Link to="/completed">Completed Tasks</Link>

        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;