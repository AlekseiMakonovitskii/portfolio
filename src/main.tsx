import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes.tsx'
import i18next from './i18n.ts'
import { I18nextProvider } from 'react-i18next'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ChakraProvider>
        <RouterProvider router={router} /> 
      </ChakraProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
