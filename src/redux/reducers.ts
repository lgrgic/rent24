import { combineReducers } from 'redux'
import { citiesData } from '../data/cities'

const citiesReducer = (state: string[] = citiesData, action: any) => {
  switch (action.type) {
    case 'SET_CITIES':
      return action.payload
    default:
      return state
  }
}

const selectedCityReducer = (state = '', action: any) => {
  switch (action.type) {
    case 'SET_SELECTED_CITY':
      return action.payload
    default:
      return state
  }
}

const numericOptionsReducer = (state: number[] = [], action: any) => {
  switch (action.type) {
    case 'SET_NUMERIC_OPTIONS':
      return action.payload
    default:
      return state
  }
}

const initialUserData = { firstName: '', lastName: '', email: '' }

const userDataReducer = (state = initialUserData, action: any) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return action.payload
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  cities: citiesReducer,
  selectedCity: selectedCityReducer,
  numericOptions: numericOptionsReducer,
  userData: userDataReducer
})
