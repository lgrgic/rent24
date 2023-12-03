import React, { useState } from 'react'
import StepCounter from './StepCounter'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

interface FormStepWrapperProps {
  totalSteps: number
}

const FormStepWrapper: React.FC<FormStepWrapperProps> = ({ totalSteps }) => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleModalClose = () => {
    if (currentStep === 3) setCurrentStep(1)
  }

  return (
    <div>
      <StepCounter currentStep={currentStep} totalSteps={totalSteps} />
      {currentStep === 1 && (
        <StepOne onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 2 && (
        <StepTwo
          currentStep={currentStep}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
      {currentStep === 3 && (
        <StepThree
          currentStep={currentStep}
          onNext={handleNext}
          onPrevious={handlePrevious}
          modalClose={handleModalClose}
        />
      )}
    </div>
  )
}

export default FormStepWrapper
