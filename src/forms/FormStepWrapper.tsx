import React, { useState } from 'react'
import StepCounter from './StepCounter'
import DropdownStep from './DropdownStep'
import CheckboxStep from './CheckboxStep'
import InputStep from './InputStep'
import './styles/styles.css'

interface FormStepWrapperProps {
  totalSteps: number
}

const FormStepWrapper: React.FC<FormStepWrapperProps> = ({ totalSteps }) => {
  const [currentStep, setCurrentStep] = useState(1)

  const placeholder = 'Choose city'
  const description = 'Select a city from the dropdown below:'
  const checkBoxTitle = 'Select your option'
  const subbmisionText = 'Thank you for your submission!'
  const title = 'Enter your information'

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
    <div className="form-wrapper">
      <StepCounter currentStep={currentStep} totalSteps={totalSteps} />

      <div className="step-content">
        {currentStep === 1 && (
          <DropdownStep
            onNext={handleNext}
            onPrevious={handlePrevious}
            placeholder={placeholder}
            description={description}
          />
        )}
        {currentStep === 2 && (
          <CheckboxStep
            currentStep={currentStep}
            onNext={handleNext}
            onPrevious={handlePrevious}
            title={checkBoxTitle}
          />
        )}
        {currentStep === 3 && (
          <InputStep
            currentStep={currentStep}
            onNext={handleNext}
            onPrevious={handlePrevious}
            modalClose={handleModalClose}
            submissionText={subbmisionText}
            title={title}
          />
        )}
      </div>
    </div>
  )
}

export default FormStepWrapper
