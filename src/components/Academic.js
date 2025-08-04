import React from 'react';
import './Academic.css';

const Academic = ({ setCurrentStep }) => {
  const handleBack = () => {
    setCurrentStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(4);
  };

  return (
    <div className="academic-container">
      <h1>Academic Details</h1>
      <p className="subtitle">Please Provide Your Academic Details</p>

      <form className="academic-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="institute">Institute Name</label>
            <input
              type="text"
              id="institute"
              placeholder="Enter your Institute Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="course">Course Name</label>
            <input
              type="text"
              id="course"
              placeholder="Enter your course name"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <select id="year" required>
              <option value="">Select year</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="semester">Semester</label>
            <select id="semester" required>
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="previousEducation">Previous Education</label>
          <input
            type="text"
            id="previousEducation"
            placeholder="Enter your previous education details"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              id="department"
              placeholder="Enter your Department"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="enrollment">Enrolment Number</label>
            <input
              type="text"
              id="enrollment"
              placeholder="Enter your Enrolment Number"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="batch">Batch</label>
          <input
            type="text"
            id="batch"
            placeholder="Enter your batch (e.g. 2002-2025)"
            required
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="back-button"
            onClick={handleBack}
          >
            <span className="arrow">←</span> Back
          </button>
          <button type="submit" className="continue-button">
            Save & Continue <span className="arrow">→</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Academic;