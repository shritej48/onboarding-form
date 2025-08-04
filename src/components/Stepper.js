import React from 'react';
import './Stepper.css';

const Stepper = ({ currentStep = 1 }) => {
  return (
    <div className='first-main'>
      <div className="stepper-navbar">
        <div className="brand">
          <img src="/images/logo.png" alt="Edu ERP Logo" />
          <span>Edu ERP</span>
        </div>

        <div className="steps">
          <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
            <div className="circle">1</div>
            <span>Welcome</span>
          </div>
          <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
            <div className="circle">2</div>
            <span>Personal Details</span>
          </div>
          <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
            <div className="circle">3</div>
            <span>Academic Details</span>
          </div>
          <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>
            <div className="circle">4</div>
            <span>Documents</span>
          </div>
          <div className={`step ${currentStep >= 5 ? 'active' : ''}`}>
            <div className="circle">5</div>
            <span>Review</span>
          </div>
          <div className={`step ${currentStep >= 6 ? 'active' : ''}`}>
            <div className="circle">6</div>
            <span>Complete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;