import React from 'react'
import Dashboard from './Pages/Dashboard'
import Header  from './components/Header'
import {Outlet} from 'react-router-dom'
const App = () => {
  return (
    <>
        <Header/>
        <Dashboard/>
        <Outlet/>
    </>
  )
}

export default App