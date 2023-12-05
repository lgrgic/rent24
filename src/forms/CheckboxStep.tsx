import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { setCheckboxOptions } from '../redux/actions'
import Checkboxes from '../components/Checkbox/Checkbox'
import Button from '../components/Button/Button'
import { options } from '../data/options'

interface CheckboxStepProps {
  currentStep: number
  onNext: () => void
  onPrevious: () => void
  title: string
}

const CheckboxStep: React.FC<CheckboxStepProps> = ({
  onNext,
  onPrevious,
  title
}) => {
  const checkboxOptions = useSelector(
    (state: RootState) => state.checkboxOptions
  )
  const dispatch = useDispatch()

  const handleCheckboxOptionsChange = (selectedOptions: number[]) => {
    dispatch(setCheckboxOptions(selectedOptions))
  }

  return (
    <div className="container">
      <p>{title}:</p>
      <Checkboxes
        options={options}
        selectedOptions={checkboxOptions}
        onChange={handleCheckboxOptionsChange}
      />
      <div className="button-container">
        <Button onClick={onPrevious}>Back</Button>
        <Button
          onClick={onNext}
          disabled={!checkboxOptions.length}
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

export default CheckboxStep
