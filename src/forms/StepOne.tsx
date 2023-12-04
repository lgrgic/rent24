import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { setCity } from '../redux/actions'
import DropdownSelector from '../components/DropdownSelector/DropdownSelector'
import Button from '../components/Button/Button'

interface StepOneProps {
  onNext: () => void
  onPrevious: () => void
}

const StepOne: React.FC<StepOneProps> = ({ onNext }) => {
  const cities = useSelector((state: RootState) => state.cities)
  const selectedCity = useSelector((state: RootState) => state.selectedCity)
  const dispatch = useDispatch()
  const placeholder = 'Choose city'

  const handleCityChange = (value: string) => {
    dispatch(setCity(value))
  }

  return (
    <div className="container">
      <p>Select a city from the dropdown below:</p>
      <DropdownSelector
        options={cities}
        value={selectedCity}
        onChange={handleCityChange}
        placeholder={placeholder}
      />
      <div className="button-container">
        <Button
          onClick={onNext}
          disabled={!selectedCity}
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

export default StepOne
