export const setCity = (city: string) => ({
  type: 'SET_SELECTED_CITY',
  payload: city
})

export const setNumericOptions = (options: number[]) => ({
  type: 'SET_NUMERIC_OPTIONS',
  payload: options
})
