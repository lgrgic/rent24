import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import {
  setUserData,
  setCheckboxOptions,
  setEmailValid,
  setSelectedItem
} from '../redux/actions'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import Modal from '../components/Modal/Modal'
import './styles/styles.css'

interface InputStepProps {
  modalClose: () => void
  currentStep: number
  onNext: () => void
  onPrevious: () => void
  submissionText: string
  title: string
}

const InputStep: React.FC<InputStepProps> = ({
  onNext,
  onPrevious,
  modalClose,
  submissionText,
  title
}) => {
  const selectedItem = useSelector((state: RootState) => state.selectedItem)
  const checkboxOptions = useSelector(
    (state: RootState) => state.checkboxOptions
  )
  const userData = useSelector((state: RootState) => state.userData)
  const isEmailValid = useSelector((state: RootState) => state.isEmailValid)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const dispatch = useDispatch()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch(setUserData({ ...userData, [name]: value }))
  }

  const handleSubmit = () => {
    setIsModalOpen(true)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    dispatch(
      setUserData({
        ...userData,
        [name]: value
      })
    )

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = emailRegex.test(value)

    dispatch(setEmailValid(isValid))
    setEmailErrorMessage(isValid ? '' : 'Enter a valid email address')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsSubmitted(true)

    dispatch(setSelectedItem(''))

    dispatch(setUserData({ firstName: '', lastName: '', email: '' }))

    dispatch(setCheckboxOptions([]))
  }

  const handleCloseSubmission = () => {
    modalClose()
  }

  const handleCancelModal = () => {
    setIsModalOpen(false)
  }

  const optionsText = checkboxOptions.length === 1 ? 'Option' : 'Options'
  const disabledButton =
    !userData.firstName ||
    !userData.lastName ||
    !userData.email ||
    !isEmailValid

  return (
    <div className="step-three-container">
      <p>{title}</p>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <Input
          id="firstName"
          name="firstName"
          value={userData.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <Input
          id="lastName"
          name="lastName"
          value={userData.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          name="email"
          value={userData.email}
          onChange={handleEmailChange}
        />
        {emailErrorMessage && (
          <p className="error-message">{emailErrorMessage}</p>
        )}
      </div>
      <div className="button-container">
        <Button onClick={onPrevious}>Back</Button>
        <Button
          onClick={handleSubmit}
          disabled={disabledButton}
          style={{
            marginRight: 0
          }}
        >
          Confirm
        </Button>
      </div>

      {isModalOpen && (
        <>
          <div className="modal-overlay" />
          <Modal onSubmit={handleCloseModal} onCancel={handleCancelModal}>
            <h2>Review and submit:</h2>
            <div className="review-info">
              <p>City: {selectedItem}</p>
              <p>
                {optionsText} selected: {checkboxOptions.join(', ')}
              </p>
              <p>First name: {userData.firstName}</p>
              <p>Last name: {userData.lastName}</p>
              <p>Email: {userData.email}</p>
            </div>
          </Modal>
        </>
      )}
      {!isModalOpen && isSubmitted && (
        <>
          <div className="modal-overlay" />
          <div className="modal-container">
            <Modal
              onSubmit={handleCloseSubmission}
              buttonText={'Close'}
              style={{ textAlign: 'right' }}
            >
              <h2>{submissionText}</h2>
            </Modal>
          </div>
        </>
      )}
    </div>
  )
}

export default InputStep
