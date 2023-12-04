import React, { useState } from 'react'
import './styles/styles.css' // Replace with the path to your CSS file

interface CustomDropdownSelectorProps {
  options: string[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const CustomDropdownSelector: React.FC<CustomDropdownSelectorProps> = ({
  options,
  value,
  onChange,
  placeholder,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = (selectedValue: string) => {
    onChange(selectedValue)
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`custom-dropdown ${className || ''}`}>
      <div
        className={`dropdown-selector ${isOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
      >
        <span>{value || placeholder}</span>
        <div className="dropdown-arrow">▼</div>
        <div className={`dropdown-options ${isOpen ? 'visible' : ''}`}>
          {options.map(option => (
            <div
              key={option}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomDropdownSelector
