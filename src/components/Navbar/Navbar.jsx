
import React,{useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/admin_assets/assets'
import { assets1 } from '../../assets/frontend_assets/assets'
const Navbar = () => {
  const[menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
   
      <img src={assets1.logo} alt="food image"></img>
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>Mobile-App</li>
        <li onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>Contact us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets1.search_icon}></img>
        <div className='navbar-search-icon'>
          <img src={assets1.basket_icon} alt=""></img> 
          <div className="dot">
            
          </div>

        </div>
        <button>Sign-In</button>
      </div>
    </div>
  )
}

export default Navbar
