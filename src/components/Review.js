import React, { useState } from 'react';
import './Review.css';

const Review = ({ setCurrentStep, formData, updateFormData }) => {
  const [editingSection, setEditingSection] = useState(null);
  const [tempFormData, setTempFormData] = useState({ ...formData });

  const handleBack = () => {
    setCurrentStep(4);
  };

  const handleSubmit = () => {
    setCurrentStep(6); 
  };

  const startEditing = (section) => {
    setEditingSection(section);
    setTempFormData({ ...formData });
  };

  const saveChanges = () => {
    updateFormData(tempFormData);
    setEditingSection(null);
  };

  const cancelEditing = () => {
    setEditingSection(null);
  };

  const handleChange = (e, field) => {
    setTempFormData({
      ...tempFormData,
      [field]: e.target.value
    });
  };

  return (
    <div className="review-page-container">
      <div className="review-header">
        <h1>Review Your Information</h1>
        <p className="subtitle">Please verify all details before submission</p>
      </div>

      <div className="review-content">
        {/* Personal Information Section */}
        <div className="review-section">
          <div className="section-header">
            <h2>Personal Information</h2>
            {editingSection !== 'personal' && (
              <button
                className="edit-button"
                onClick={() => startEditing('personal')}
              >
                Edit
              </button>
            )}
          </div>

          {editingSection === 'personal' ? (
            <div className="edit-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    value={tempFormData.firstName || ''}
                    onChange={(e) => handleChange(e, 'firstName')}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={tempFormData.lastName || ''}
                    onChange={(e) => handleChange(e, 'lastName')}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={tempFormData.email || ''}
                  onChange={(e) => handleChange(e, 'email')}
                />
              </div>
              <div className="form-actions">
                <button className="cancel-button" onClick={cancelEditing}>
                  Cancel
                </button>
                <button className="save-button" onClick={saveChanges}>
                  Save Changes
                </button>
              </div>
            </div>
          ) : (
            <div className="review-items">
              <div className="review-item">
                <span className="review-label">Full Name:</span>
                <span className="review-value">
                  {formData.firstName || 'Not provided'} {formData.lastName || ''}
                </span>
              </div>
              <div className="review-item">
                <span className="review-label">Email:</span>
                <span className="review-value">{formData.email || 'Not provided'}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Phone:</span>
                <span className="review-value">{formData.phone || 'Not provided'}</span>
              </div>
            </div>
          )}
        </div>

        {/* Academic Information Section */}
        <div className="review-section">
          <div className="section-header">
            <h2>Academic Information</h2>
            {editingSection !== 'academic' && (
              <button
                className="edit-button"
                onClick={() => startEditing('academic')}
              >
                Edit
              </button>
            )}
          </div>

          {editingSection === 'academic' ? (
            <div className="edit-form">
              <div className="form-group">
                <label>Institute Name</label>
                <input
                  type="text"
                  value={tempFormData.institute || ''}
                  onChange={(e) => handleChange(e, 'institute')}
                />
              </div>
              <div className="form-group">
                <label>Course Name</label>
                <input
                  type="text"
                  value={tempFormData.course || ''}
                  onChange={(e) => handleChange(e, 'course')}
                />
              </div>
              <div className="form-group">
                <label>Year</label>
                <input
                  type="text"
                  value={tempFormData.year || ''}
                  onChange={(e) => handleChange(e, 'year')}
                />
              </div>
              <div className="form-actions">
                <button className="cancel-button" onClick={cancelEditing}>
                  Cancel
                </button>
                <button className="save-button" onClick={saveChanges}>
                  Save Changes
                </button>
              </div>
            </div>
          ) : (
            <div className="review-items">
              <div className="review-item">
                <span className="review-label">Institute:</span>
                <span className="review-value">{formData.institute || 'Not provided'}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Course:</span>
                <span className="review-value">{formData.course || 'Not provided'}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Year:</span>
                <span className="review-value">{formData.year || 'Not provided'}</span>
              </div>
            </div>
          )}
        </div>

        {/* Documents Section */}
        <div className="review-section">
          <h2>Documents</h2>
          <div className="review-items">
            <div className="review-item">
              <span className="review-label">ID Proof:</span>
              <span className="review-value">
                {formData.idProof ? formData.idProof.name : 'Not uploaded'}
              </span>
            </div>
            <div className="review-item">
              <span className="review-label">Marksheet:</span>
              <span className="review-value">
                {formData.marksheet ? formData.marksheet.name : 'Not uploaded'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="review-footer">
        <button
          type="button"
          className="back-button"
          onClick={handleBack}
        >
          <span className="arrow">←</span> Back
        </button>
        <button
          type="button"
          className="submit-button"
          onClick={handleSubmit}
        >
          Submit Application <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default Review;