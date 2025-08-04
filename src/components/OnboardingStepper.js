import React from 'react';
import './OnboardingStepper.css';

const steps = [
  {
    icon: <img src="https://tse3.mm.bing.net/th/id/OIP.ZFJkB0x5IpB9q5wmyINgAAHaHJ?rs=1&pid=ImgDetMain" alt="pen-paper" className="step-img" />,
    title: 'Fill Information',
    description: 'Provide Your Personal\nAnd Academic Details',
  },
  {
    icon: <img src="https://cdn-icons-png.flaticon.com/512/314/314314.png" alt="folder" className="step-img" />,
    title: 'Upload Documents',
    description: 'Submit Required\nDocuments And Certificates',
  },
  {
    icon: <img src="https://static.vecteezy.com/system/resources/previews/044/448/963/original/square-green-check-mark-free-png.png" alt="check" className="step-img square-img" />,
    title: 'Complete Registration',
    description: 'Review And Finalize Your\nOnboarding',
  },
];


const OnboardingStepper = () => {
  return (
    <div className="stepper-container">
      {steps.map((step, index) => (
        <div className="step-card" key={index}>
          <div className="step-icon">{step.icon}</div>
          <h3 className="step-title">{step.title}</h3>
          <p className="step-description">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OnboardingStepper;
