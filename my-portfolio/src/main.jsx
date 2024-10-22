import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import WeatherData from './components/weather/WeatherData.jsx'
import PasswordGenerator from './components/password generator/PasswordGen.jsx'
import ToDo from './components/TodoList/TodoList.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
     <Route index element={<Home/>} />
     <Route path='skills' element={<Skills/>} />
     <Route path='projects' element={<Projects/>} />
     <Route path='contact' element={<Contact/>} />
     <Route path='weather' element={<WeatherData/>} />
     <Route path='password' element={<PasswordGenerator/>} />
     <Route path='todo' element={<ToDo/>} />


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router}/>
  </StrictMode>,
)
