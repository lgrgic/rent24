import React from 'react'
import Button from '../Button/Button'
import './styles.css'

interface ModalProps {
  children: any
  onSubmit: () => void
  onCancel?: () => void
  buttonText?: string
  style?: React.CSSProperties
}

const Modal: React.FC<ModalProps> = ({
  children,
  onSubmit,
  onCancel,
  buttonText,
  style
}) => {
  return (
    <div className="modal">
      {children}
      {onCancel && <Button onClick={onCancel}>Cancel</Button>}
      <Button onClick={onSubmit}>{buttonText ? buttonText : 'Submit'}</Button>
    </div>
  )
}

export default Modal
