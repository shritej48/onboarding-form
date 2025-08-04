import React from 'react';
import './PersonalInfoForm.css';

const PersonalInfoForm = ({ setCurrentStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  return (
    <div className="personal-info-container">
      <h1>Personal Information</h1>
      <p className="subtitle">Please Provide Your Personal Details</p>

      <form className="personal-info-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group dob-container">
            <label htmlFor="dob">Date Of Birth</label>
            <div className="dob-input-wrapper">
              <input
                type="text"
                id="dob"
                placeholder="dd/mm/yyyy"
                required
              />
              <span className="calendar-icon">
                <svg viewBox="0 0 24 24" fill="#555" width="20" height="20">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 
                    2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 
                    2-2V5c0-1.1-.9-2-2-2zm0 
                    16H5V8h14v11zM9 10H7v2h2v-2zm4 
                    0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 
                    4H7v2h2v-2zm4 0h-2v2h2v-2zm4 
                    0h-2v2h2v-2z" />
                </svg>
              </span>
            </div>
          </div>

          <div className="form-group" required>
            <label htmlFor="gender">Gender</label>
            <select id="gender" required>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your Phone number"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter your Address"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              placeholder="Enter your state"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              id="zip"
              placeholder="Enter your Zip code"
              required
            />
          </div>
        </div>

        <button type="submit" className="continue-button">
          Continue <span className="arrow">→</span>
        </button>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
