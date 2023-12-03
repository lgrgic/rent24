import React from 'react'

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps
}) => {
  return (
    <h2>
      Step {currentStep} of {totalSteps}
    </h2>
  )
}

export default StepIndicator
