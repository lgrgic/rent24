import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { setSelectedItem } from '../redux/actions'
import DropdownSelector from '../components/DropdownSelector/DropdownSelector'
import Button from '../components/Button/Button'
import { data } from '../data/cities'

interface DropdownStep {
  onPrevious: () => void
  onNext: () => void
  placeholder: string
  description: string
}

const DropdownStep: React.FC<DropdownStep> = ({
  onNext,
  placeholder,
  description
}) => {
  const selectedItem = useSelector((state: RootState) => state.selectedItem)
  const dispatch = useDispatch()

  const handleItemChange = (value: string) => {
    dispatch(setSelectedItem(value))
  }

  return (
    <div className="container">
      <p>{description}</p>
      <DropdownSelector
        options={data}
        value={selectedItem}
        onChange={handleItemChange}
        placeholder={placeholder}
      />
      <div className="button-container">
        <Button
          onClick={onNext}
          disabled={!selectedItem}
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

export default DropdownStep
