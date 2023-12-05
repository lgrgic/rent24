import { combineReducers } from 'redux'

interface Action {
  type: string
  payload: any
}

export const itemsReducer = (state: string[] = [], action: Action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return action.payload
    default:
      return state
  }
}

export const selectedItemReducer = (state = '', action: Action) => {
  switch (action.type) {
    case 'SET_SELECTED_ITEM':
      return action.payload
    default:
      return state
  }
}

const checkboxOptionsReducer = (state: number[] = [], action: any) => {
  switch (action.type) {
    case 'SET_CHECKBOX_OPTIONS':
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

const isEmailValidReducer = (state = true, action: any) => {
  switch (action.type) {
    case 'SET_EMAIL_VALID':
      return action.payload
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  items: itemsReducer,
  selectedItem: selectedItemReducer,
  checkboxOptions: checkboxOptionsReducer,
  userData: userDataReducer,
  isEmailValid: isEmailValidReducer
})
