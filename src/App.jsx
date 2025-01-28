import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route} from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Login from './components/Login'
import Contactus from './components/Contactus'





function App() {
  const logo="/logo.jpg"
  const carousel="/images/carousel.jpg"
  const carouselone="/images/carouselone.jpg"
    const carouseltwo="/images/carouseltwo.jpg"

    const products = [
      { im: "/images/t1.jpg", id: 1, name: "Modern Sofa", price: 199.99, description: "A stylish modern sofa that blends well with contemporary decor." },
      { im: "/images/t2.jpg", id: 2, name: "Traditional Sofa", price: 349.99, description: "A handcrafted traditional sofa with elegant wooden frames and soft cushions." },
      { im: "/images/t3.jpg", id: 3, name: "Luxury Armchair", price: 229.99, description: "A luxury armchair designed for ultimate comfort with premium fabric." },
      { im: "/images/t4.jpg", id: 4, name: "Wooden Dining Table", price: 149.99, description: "A sturdy wooden dining table, perfect for family meals and gatherings." },
      { im: "/images/t5.jpg", id: 5, name: "Luxury Sofa", price: 399.99, description: "A luxurious sofa with plush cushions, designed for relaxation and style." },
      { im: "/images/t6.jpg", id: 6, name: "Luxury Chair", price: 129.99, description: "A comfortable luxury chair, perfect for any modern living space." },
      { im: "/images/t7.jpg", id: 7, name: "Queen Bed Frame", price: 249.99, description: "A sturdy queen-sized bed frame with a modern design, built for durability." },
      { im: "/images/t8.jpg", id: 8, name: "Storage Cabinet", price: 329.99, description: "A spacious storage cabinet with multiple compartments for organized living." },
      { im: "/images/t9.jpg", id: 9, name: "Modern Sofa Set", price: 499.99, description: "A modern sofa set that fits perfectly in any contemporary living room." },
      { im: "/images/t10.jpg", id: 10, name: "Wooden Stairs", price: 159.99, description: "Beautifully crafted wooden stairs, ideal for both indoor and outdoor use." },
      { im: "/images/t11.jpg", id: 11, name: "Relax Sofa", price: 229.99, description: "A comfortable relax sofa designed for maximum comfort and relaxation." },
    ];

    const carouselab="/images/t5.jpg"
    const carouseloneab="/images/t7.jpg"
      const carouseltwoab="/images/t11.jpg"

  
    


  return (
    <>
   <BrowserRouter>
     <Navbar logo={logo}
     />
     <Routes>
      <Route path="/"  element={<Home carousel={carousel} carouselone={carouselone} carouseltwo={carouseltwo} products={ products}/>}/>
     
      <Route path="/about" element={<About carouselab={carouselab} products={ products} carouseloneab={carouseloneab} carouseltwoab={carouseltwoab}/>}/> 
      <Route path="/Shop" element={<Shop  products={ products} />}/>
      <Route path="/login" element={<Login/>}/>


      <Route path="/contactus" element={<Contactus/>}/>
    

     
     </Routes>

     </BrowserRouter>

     
    </>
  )
}

export default App
