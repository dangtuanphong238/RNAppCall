import React from 'react'

// Navigation
import Navigation from '@/Navigation/AppNavigation'

// Redux
import { Provider } from 'react-redux'
import store from '@/Redux'
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
