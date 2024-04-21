import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { Provider } from 'react-redux'
import { store } from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <Navbar/>
      <Main/>
    </Provider>
  )
}

export default App