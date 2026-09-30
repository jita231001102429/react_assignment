import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const initialStudents = [
    {
      name: "Ayan Roy",
      roll: "CSE-101",
      department: "Computer Science",
      semester: "5th",
      cgpa: 3.85,
      photo: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Sneha Das",
      roll: "ECE-102",
      department: "Electronics",
      semester: "4th",
      cgpa: 3.92,
      photo: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Rahul Sharma",
      roll: "ME-103",
      department: "Mechanical",
      semester: "6th",
      cgpa: 3.45,
      photo: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Priya Sen",
      roll: "CSE-104",
      department: "Computer Science",
      semester: "5th",
      cgpa: 3.70,
      photo: "https://i.pravatar.cc/150?img=9"
    }
  ];

  const [students, setStudents] = useState(initialStudents);
  const [isSorted, setIsSorted] = useState(false);

  const handleSortByCGPA = () => {
    const sortedList = [...students].sort((a, b) => b.cgpa - a.cgpa);
    setStudents(sortedList);
    setIsSorted(true);
  };

  return (
    <div className="app-container">
      <Header title="Student Information Portal" />

      <main className="main-content">
        <div className="controls">
          <button onClick={handleSortByCGPA} className="sort-btn">
            {isSorted ? "Sorted by High to Low CGPA" : "Sort by CGPA (High to Low)"}
          </button>
        </div>

        <StudentList students={students} />
      </main>

      <Footer copyrightText="© 2026 Student Information Management System" />
    </div>
  );
}

export default App;