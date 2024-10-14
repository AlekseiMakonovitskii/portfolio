import React from 'react'
import { Route, Routes } from 'react-router-dom';
import routesConfig from './config'

function AppRoutes() {
  return (
    <Routes>
      {routesConfig.map((route, index) => (
        <Route 
          key={index}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  )
}

export default React.memo(AppRoutes);
