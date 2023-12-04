import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { setNumericOptions } from '../redux/actions'
import Checkboxes from '../components/Checkboxes'
import Button from '../components/Button'
import { numOptions } from '../data/options'

interface StepTwoProps {
  currentStep: number
  onNext: () => void
  onPrevious: () => void
}

const StepTwo: React.FC<StepTwoProps> = ({ onNext, onPrevious }) => {
  const numericOptions = useSelector((state: RootState) => state.numericOptions)
  const dispatch = useDispatch()

  const handleNumericOptionsChange = (selectedOptions: number[]) => {
    dispatch(setNumericOptions(selectedOptions))
  }

  return (
    <div className="container">
      <p>Select options:</p>
      <Checkboxes
        options={numOptions}
        selectedOptions={numericOptions}
        onChange={handleNumericOptionsChange}
      />
      <div className="button-container">
        <Button onClick={onPrevious}>Back</Button>
        <Button
          onClick={onNext}
          disabled={!numericOptions.length}
          style={{
            marginRight: 0
          }}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default StepTwo
