import React from 'react'
import './Travels.css'
import { Link, Outlet } from 'react-router-dom';
import { getTravels } from '../api/data'
import PacksTravel from '../components/PacksTravel';

const Travels = () => {
 const travels = getTravels();
  return (
   <div className='travels-container'>
     <h2>Destinos para una aventura salvaje 🧳🌍🛩️</h2>
     <ul>
      {
        travels.map((travel) => (
          <li key={travel.id}>
            <Link to={`/travel/${travel.id}`}>
            <PacksTravel travel={travel}/>
            </Link>
            
          </li>
        ))
      }
     </ul>
     <Outlet />
   </div>
  )
}

export default Travels