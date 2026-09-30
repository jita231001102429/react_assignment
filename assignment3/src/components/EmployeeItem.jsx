import React from 'react';

function EmployeeItem({ employee, onDelete, onEdit }) {
  return (
    <div className="employee-card">
      <div className="card-header">
        <h3>{employee.name}</h3>
        <span className="badge-id">ID: {employee.empId}</span>
      </div>
      <div className="card-body">
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Gender:</strong> {employee.gender}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p><strong>Local Address:</strong> {employee.localAddress}</p>
        <p><strong>Permanent Address:</strong> {employee.permanentAddress}</p>
      </div>
      <div className="card-actions">
        <button className="btn btn-edit" onClick={() => onEdit(employee)}>Edit</button>
        <button className="btn btn-delete" onClick={() => onDelete(employee.empId)}>Delete</button>
      </div>
    </div>
  );
}

export default EmployeeItem;