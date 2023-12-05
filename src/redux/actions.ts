export const setSelectedItem = (item: string) => ({
  type: 'SET_SELECTED_ITEM',
  payload: item
})

export const setCheckboxOptions = (options: number[]) => ({
  type: 'SET_CHECKBOX_OPTIONS',
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
