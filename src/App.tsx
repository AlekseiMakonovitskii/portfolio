import React from 'react'
import Header from './components/Header'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Header />
      App
    </ChakraProvider>
  )
}

export default App
