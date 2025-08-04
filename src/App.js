import React, { useState } from 'react';
import Stepper from './components/Stepper';
import MainSteps from './components/MainSteps';
import OnboardingStepper from './components/OnboardingStepper';
import PersonalInfoForm from './components/PersonalInfoForm';
import Academic from './components/Academic';
import Documents from './components/Documents';
import Review from './components/Review';
import Complete from './components/Complete';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',

    // Academic Information
    institute: '',
    course: '',
    year: '',
    semester: '',
    previousEducation: '',
    department: '',
    enrollmentNumber: '',
    batch: '',

    // Documents
    idProof: null,
    marksheet: null
  });

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  return (
    <div className='outer-container'>
      <Stepper currentStep={currentStep} />

      {currentStep === 1 && (
        <>
          <MainSteps />
          <OnboardingStepper />
          <div className='button'>
            <button
              className='button-submit'
              onClick={() => setCurrentStep(2)}
            >
              Get Started <span className="arrow">→</span>
            </button>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <PersonalInfoForm
          setCurrentStep={setCurrentStep}
          formData={formData}
          updateFormData={updateFormData}
        />
      )}

      {currentStep === 3 && (
        <Academic
          setCurrentStep={setCurrentStep}
          formData={formData}
          updateFormData={updateFormData}
        />
      )}

      {currentStep === 4 && (
        <Documents
          setCurrentStep={setCurrentStep}
          formData={formData}
          updateFormData={updateFormData}
        />
      )}

      {currentStep === 5 && (
        <Review
          setCurrentStep={setCurrentStep}
          formData={formData}
        />
      )}

      {currentStep === 6 && (
        <Complete setCurrentStep={setCurrentStep} />
      )}
    </div>
  );
}

export default App;