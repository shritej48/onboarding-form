import React from 'react';
import './Complete.css';

const Complete = ({ setCurrentStep }) => {
  if (typeof setCurrentStep !== 'function') {
    console.error('setCurrentStep is not a function in Complete component');
    return (
      <div className="complete-container">
        <div>Error: Navigation not available</div>
      </div>
    );
  }

  const handleDashboardClick = () => {
    setCurrentStep(1); 
  };

  return (
    <div className="complete-container">
      <div className="complete-icon">✓</div>
      <h1>Application Submitted Successfully!</h1>
      <p className="complete-message">
        Thank you for completing the onboarding process. Your application is now under review.
        We'll contact you via email within 3-5 business days.
      </p>
      <div className="next-steps">
        <h3>Next Steps:</h3>
        <ul>
          <li>Check your email for confirmation</li>
          <li>Prepare original documents for verification</li>
          <li>Look out for orientation schedule</li>
        </ul>
      </div>
      <button 
        className="dashboard-button"
        onClick={handleDashboardClick}
      >
        Go to Student Dashboard
      </button>
    </div>
  );
};

export default Complete;