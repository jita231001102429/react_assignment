import React from 'react';
function StudentCard({ student }) {
  const { name, roll, department, semester, cgpa, photo } = student;

  return (
    <div className="student-card">
      <img src={photo} alt={name} className="student-photo" />
      <div className="student-info">
        <h3>{name}</h3>
        <p><strong>Roll:</strong> {roll}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Semester:</strong> {semester}</p>
        <p className="cgpa-badge"><strong>CGPA:</strong> {cgpa}</p>
      </div>
    </div>
  );
}

export default StudentCard;