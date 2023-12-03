import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { setCity } from '../redux/actions'
import DropdownSelector from '../components/DropdownSelector'
import Button from '../components/Button'

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
    <>
      <p>Select a city from the dropdown below:</p>
      <DropdownSelector
        options={cities}
        value={selectedCity}
        onChange={handleCityChange}
        placeholder={placeholder}
      />
      <Button onClick={onNext} disabled={!selectedCity}>
        Next
      </Button>
    </>
  )
}

export default StepOne
