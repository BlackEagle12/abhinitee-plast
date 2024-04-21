import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopNavigation from './Components/Common/top-navigation/top-navigation'
import Home from './Components/pages/Home/Home'
import AboutUs from './Components/pages/About Us/AboutUs'
import ContactUs from './Components/pages/Contect Us/ContactUs'
import NoPage from './Components/pages/No Page/NoPage'
import Product from './Components/pages/Products/Product'

function App() {
  return (
    <BrowserRouter>
            <div className='top-navigation-container'>
                <TopNavigation />                
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="product" element={<Product />} />
                <Route path="contact" element={<ContactUs />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
