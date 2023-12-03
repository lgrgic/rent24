import React from 'react'
import './styles/styles.css'

interface InputProps {
  id: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  style?: any
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  value,
  onChange
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="basicInput"
    />
  )
}

export default Input
