import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import Nav from "./components/Nav"


function App() {
  useEffect(()=>{
    Aos.init()
  })

  return (
    <>
    <div className="bg-black max-h-full">

    <Nav/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default App
