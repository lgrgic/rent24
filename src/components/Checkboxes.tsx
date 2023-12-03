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

  console.log(selectedOptions)

  return (
    <div>
      {options.map(option => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  )
}

export default Checkboxes
