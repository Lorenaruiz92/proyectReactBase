import React from 'react'
import  Form  from '../components/form' 
import './Member.css'

const Member = () => {
  return (
    <div className='member-container'>
       <h2>Hazte Socio de WildSoul 🌍</h2>
       <p>Recibirás ofertas, descuentos y viajes exclusivos.</p>
     <Form />
    </div>
  )
}

export default Member