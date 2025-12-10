import React from 'react'
import { NavLink, useLocation, useNavigate} from 'react-router-dom'
import CartIcon from './CartIcon'
import SearchTravel from './searchTravel'
import './Header.css'

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === "/";
  return (
    <div className='header-container'>
        <div className="header-left">
        <h1 onClick={() => navigate("/")} className="logo-click"> Viajes WildSoul🌍 </h1>
        <p>Un mundo por descubrir</p>
        </div>
          <nav>
            <NavLink to="/travels">Viajes🛩️</NavLink>
            <NavLink to="/about">Quiénes somos🏠</NavLink>
            <NavLink to="/member">Socios📋</NavLink>
            <CartIcon />
          </nav>
          {isHome && (
         <div className="header-home-content">
          <h2>Viaja y descubre una aventura salvaje en los diferentes rincones del mundo.</h2>
          <SearchTravel />
         </div>
          )}
        
    </div>
  )
}

export default Header