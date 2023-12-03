import React from 'react'

interface DropdownSelectorProps {
  options: string[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  options,
  value,
  onChange,
  placeholder
}) => {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      {!value && placeholder && <option value="">{placeholder}</option>}
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default DropdownSelector
