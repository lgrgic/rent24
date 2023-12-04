import React from 'react'
import './styles.css'

interface CheckboxProps {
  options: number[]
  selectedOptions: number[]
  onChange: (selectedOptions: number[]) => void
}

const Checkbox: React.FC<CheckboxProps> = ({
  options,
  selectedOptions,
  onChange
}) => {
  const handleCheckboxChange = (value: number) => {
    const updatedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter(selectedOption => selectedOption !== value)
      : [...selectedOptions, value]

    onChange(updatedOptions)
  }

  return (
    <div className="checkbox-container">
      {options.map(option => (
        <div key={option} className="checkbox-item">
          <input
            type="checkbox"
            id={`checkbox-${option}`}
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          <label htmlFor={`checkbox-${option}`}>{option}</label>
        </div>
      ))}
    </div>
  )
}

export default Checkbox
