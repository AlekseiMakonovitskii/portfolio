import React from 'react'
import Header from './components/Header'
import { ChakraProvider } from '@chakra-ui/react'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <ChakraProvider>
      <Header />
      <AppRoutes />
    </ChakraProvider>
  )
}

export default App  
