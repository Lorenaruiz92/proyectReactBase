import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
       <p> Agencia de viajes WildSoul🌎 Destinos para viajar y enamorarte de cada rincón del mundo.🌎 </p>
       <p>Si necesitas ayuda estaremos encantados de atenderte, llamanos o manda un email:</p>
       <p>📩Email: agencia.wildSoul@gmail.com.  ☎️Número de teléfono 954 11 26 22 y 📞 móvil 616 576 675</p>
       <p>🕐Horario de atención al cliente: L-V de 10h a 14h y de 17h a 20:30h, Sábados de 10.30 a 13:30. </p>
       <p>Esta página web cumple con la normativa Europea de viajes, comercio y empresa. Profesionales expertos en turismo, acreditados y licenciados en la universidad de Sevilla. Para más información siguenos en nuestras redes.</p>
    
     <div className='icons'>
      <a href="https://www.instagram.com">
        <img src="/icons/instagram.png" alt="Instagram" />
      </a>
      <a href="https://www.whatsapp.com">
        <img src="/icons/whatsapp.png" alt="WhatsApp" />
      </a>
      <a href="https://email.com">
        <img src="/icons/email.png" alt="Email" />
      </a>
      <a href="https://www.twiter.com">
        <img src="/icons/twiter.png" alt="Twiter" />
      </a>
      <a href="https://www.tiktok.com">
        <img src="/icons/tik tok.png" alt="Tik tok" />
      </a>
     </div>
  </div>
  )
}

export default Footer