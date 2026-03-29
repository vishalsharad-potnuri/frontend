import React from 'react'
import './Footer.css'
import {assets1} from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets1.logo} alt=""></img>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium tenetur harum rem adipisci eveniet ullam? Itaque ullam veritatis dolore, hic optio placeat aut maxime, facilis corporis soluta, quod dignissimos quo.</p>
            <div className="footer-social-icons">
              <img src={assets1.facebook_icon} alt=""></img>
              <img src={assets1.twitter_icon} alt=""></img>
              <img src={assets1.linkedin_icon} alt=""></img>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>+1-212-456-8533</li>
                <li>contact@tomato.com</li>
               </ul>
        </div>
     
       </div>
       <hr/>
       <p className="footer-copyright">Copyright 2024 Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
