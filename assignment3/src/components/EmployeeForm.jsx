import React, { useState, useEffect } from 'react';

function EmployeeForm({ onAddEmployee, onUpdateEmployee, editingEmployee, onCancelEdit }) {
  const initialState = {
    empId: '',
    name: '',
    department: 'IT',
    gender: 'Male',
    phone: '',
    localAddress: '',
    permanentAddress: ''
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingEmployee) {
      setFormData(editingEmployee);
    } else {
      setFormData(initialState);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.empId) {
      alert('Please fill in Employee ID and Name');
      return;
    }

    if (editingEmployee) {
      onUpdateEmployee(formData);
    } else {
      onAddEmployee(formData);
    }
    setFormData(initialState);
  };

  return (
    <div className="form-container">
      <h2>{editingEmployee ? 'Edit Employee' : 'Add New Employee'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-row">
          <input
            type="text"
            name="empId"
            placeholder="Employee ID"
            value={formData.empId}
            onChange={handleChange}
            disabled={!!editingEmployee}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group-row">
          <select name="department" value={formData.department} onChange={handleChange}>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>

          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group-row">
          <input
            type="text"
            name="localAddress"
            placeholder="Local Address"
            value={formData.localAddress}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="permanentAddress"
            placeholder="Permanent Address"
            value={formData.permanentAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="btn-group">
          <button type="submit" className="btn btn-submit">
            {editingEmployee ? 'Update Employee' : 'Add Employee'}
          </button>
          {editingEmployee && (
            <button type="button" className="btn btn-cancel" onClick={onCancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;