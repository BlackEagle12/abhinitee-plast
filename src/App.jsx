import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopNavigation from './Components/Common/TopNavigation'
import Home from './Components/pages/Home/Home'
import AboutUs from './Components/pages/About Us/AboutUs'
import ContactUs from './Components/pages/Contect Us/ContactUs'
import NoPage from './Components/pages/No Page/NoPage'
import Product from './Components/pages/Products/Product'
import GalleryComponent from './Components/pages/Gallery/GalleryComponent'
import ComminSoon from './Components/pages/Comming Soon/CommingSoon'

function App() {
  return (
    <BrowserRouter>
            <div className='top-navigation-container'>
                <TopNavigation />                
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/product" element={<Product />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/gallery" element={<GalleryComponent />} />
                <Route path="/clients" element={<ComminSoon />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
