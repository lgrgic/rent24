import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { FormStepWrapper } from './forms'
import './App.css'

const App: React.FC = () => {
  const totalSteps = 3

  return (
    <Provider store={store}>
      <div>
        <FormStepWrapper totalSteps={totalSteps} />
      </div>
    </Provider>
  )
}

export default App
