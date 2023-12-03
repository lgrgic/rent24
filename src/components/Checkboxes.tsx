import React from 'react'

interface CheckboxesProps {
  options: number[]
  selectedOptions: number[]
  onChange: (selectedOptions: number[]) => void
}

const Checkboxes: React.FC<CheckboxesProps> = ({
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

export default Checkboxes
