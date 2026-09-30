import React from 'react';
import EmployeeItem from './EmployeeItem';

function EmployeeList({ employees, onDelete, onEdit }) {
  if (employees.length === 0) {
    return <p className="no-data">No employees found.</p>;
  }

  return (
    <div className="employee-grid">
      {employees.map((emp) => (
        <EmployeeItem
          key={emp.empId}
          employee={emp}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default EmployeeList;