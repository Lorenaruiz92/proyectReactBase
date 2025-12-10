import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Travels from './pages/Travels.jsx'
import Travel from './pages/Travel.jsx'
import Member from './pages/Member.jsx'
import NotFound from './pages/404.jsx'
import Cart from './components/Cart.jsx'
import { CartProvider } from "./hooks/useCart";
import React, { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
     <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<></>} />
          <Route path="about" element={<About />} />
          <Route path="member" element={<Member />} />
          <Route path="travels" element={<Travels />} />
          <Route path="travel/:id" element={<Travel />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
     </BrowserRouter>
    </CartProvider>
  </StrictMode>
)

