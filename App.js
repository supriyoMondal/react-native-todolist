import React from 'react';
import { TodoContextProvider } from './context/TodoContext'
import MainComponent from './compoenents/MainComponent';

const App = () => {
  return (
    <TodoContextProvider>
      <MainComponent />
    </TodoContextProvider>
  )
}

export default App;
