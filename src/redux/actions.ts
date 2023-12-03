export const setCity = (city: string) => ({
  type: 'SET_SELECTED_CITY',
  payload: city
})

export const setNumericOptions = (options: number[]) => ({
  type: 'SET_NUMERIC_OPTIONS',
  payload: options
})

export const setUserData = (userData: {
  firstName: string
  lastName: string
  email: string
}) => ({
  type: 'SET_USER_DATA',
  payload: userData
})

export const setEmailValid = (isValid: boolean) => ({
  type: 'SET_EMAIL_VALID',
  payload: isValid
})
