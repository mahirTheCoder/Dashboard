
import React from 'react'
import './App.css'
import { createBrowserRouter, Route, Router } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Layout from './Components/layout/Layout'
import Home from './pages/Home'

const App = () => {
const myRoute = createBrowserRouter(createRoutesFromElements( 
<Route path='/' element={<Layout />}>
<Route index element={<Home/>}/>
</Route>


))


  return (
    <>
    <RouterProvider router={myRoute}/>
    
    </>
  )
}

export default App
