import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([
    {
      empId: 'EMP101',
      name: 'Rahul Ghosh',
      department: 'IT',
      gender: 'Male',
      phone: '9876543210',
      localAddress: 'Kolkata, WB',
      permanentAddress: 'Kolkata, WB'
    },
    {
      empId: 'EMP102',
      name: 'Priya Roy',
      department: 'HR',
      gender: 'Female',
      phone: '9123456789',
      localAddress: 'Howrah, WB',
      permanentAddress: 'Asansol, WB'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [editingEmployee, setEditingEmployee] = useState(null);

  // ১. Add Employee
  const handleAddEmployee = (newEmp) => {
    const exists = employees.some((emp) => emp.empId === newEmp.empId);
    if (exists) {
      alert('Employee ID already exists!');
      return;
    }
    setEmployees([...employees, newEmp]);
  };

  // ২. Delete Employee
  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.empId !== id));
  };

  // ৩. Edit Employee
  const handleEditClick = (emp) => {
    setEditingEmployee(emp);
  };

  const handleUpdateEmployee = (updatedEmp) => {
    setEmployees(
      employees.map((emp) => (emp.empId === updatedEmp.empId ? updatedEmp : emp))
    );
    setEditingEmployee(null);
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  // Search & Filter Logic
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.empId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDept = selectedDept === 'All' || emp.department === selectedDept;

    return matchesSearch && matchesDept;
  });

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Employee Directory Management</h1>
      </header>

      <main className="main-content">
        {/* Form Section */}
        <EmployeeForm
          onAddEmployee={handleAddEmployee}
          onUpdateEmployee={handleUpdateEmployee}
          editingEmployee={editingEmployee}
          onCancelEdit={handleCancelEdit}
        />

        {/* Search, Filter & Count Section */}
        <div className="filter-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by Name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-box">
            <label>Filter by Dept: </label>
            <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
              <option value="All">All Departments</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          <div className="count-badge">
            Total Employees: <strong>{filteredEmployees.length}</strong>
          </div>
        </div>

        {/* Employee List Section */}
        <EmployeeList
          employees={filteredEmployees}
          onDelete={handleDeleteEmployee}
          onEdit={handleEditClick}
        />
      </main>
    </div>
  );
}

export default App;