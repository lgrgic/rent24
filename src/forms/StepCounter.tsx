import React from 'react'

interface StepCounterProps {
  currentStep: number
  totalSteps: number
}

const StepCounter: React.FC<StepCounterProps> = ({
  currentStep,
  totalSteps
}) => {
  return (
    <h2>
      Step {currentStep} of {totalSteps}
    </h2>
  )
}

export default StepCounter
