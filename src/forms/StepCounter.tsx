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
    <div className="counter-container">
      <h2>
        Step {currentStep} of {totalSteps}
      </h2>
    </div>
  )
}

export default StepCounter
