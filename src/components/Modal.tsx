import React from 'react'
import Button from './Button'
import './styles/styles.css'

interface ModalProps {
  children: any
  onSubmit: () => void
  onCancel?: () => void
}

const Modal: React.FC<ModalProps> = ({ children, onSubmit, onCancel }) => {
  return (
    <div className="modal">
      {children}
      {onCancel && <Button onClick={onCancel}>Cancel</Button>}
      <Button onClick={onSubmit} style={{ backgroundColor: '#a9865b' }}>
        Submit
      </Button>
    </div>
  )
}

export default Modal
