import React from 'react';
import './Documents.css';

const Documents = ({ setCurrentStep }) => {
  const handleBack = () => {
    setCurrentStep(3); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(5); 
  };

  return (
    <div className="documents-container">
      <h1>Document Upload</h1>
      <p className="subtitle">Please upload the required documents</p>

      <form className="documents-form" onSubmit={handleSubmit}>
        <div className="document-group">
          <label htmlFor="photo">Passport Photo</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            required
          />
          <p className="file-hint">JPEG or PNG, max 2MB</p>
        </div>

        <div className="document-group">
          <label htmlFor="idProof">ID Proof</label>
          <input
            type="file"
            id="idProof"
            accept=".pdf,.jpg,.jpeg,.png"
            required
          />
          <p className="file-hint">Aadhar, Passport, or Driver's License</p>
        </div>

        <div className="document-group">
          <label htmlFor="marksheet">Previous Marksheet</label>
          <input
            type="file"
            id="marksheet"
            accept=".pdf,.jpg,.jpeg,.png"
            required
          />
          <p className="file-hint">PDF or image, max 5MB</p>
        </div>

        <div className="document-group">
          <label htmlFor="signature">Signature</label>
          <input
            type="file"
            id="signature"
            accept="image/*"
            required
          />
          <p className="file-hint">White background, JPG/PNG</p>
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
            Upload & Continue <span className="arrow">→</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Documents;