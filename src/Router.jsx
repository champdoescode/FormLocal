import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FormExample from './FormExample'
import App from './App'
import Dashboard from './Components/Dashboard'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}>
            <Route path='' element={<FormExample/>} />
            <Route path='/dashboard' element ={<Dashboard/>}/>

        </Route>
    </Routes>
  )
}

export default Router