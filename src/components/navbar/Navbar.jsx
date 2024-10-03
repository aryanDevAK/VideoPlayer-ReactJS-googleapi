import React from 'react'
import "./Navbar.css"
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"
import more_icon from "../../assets/more.png"
import { Link } from 'react-router-dom'

const Navbar = ({setsidebar}) => {
  return (
      <nav className='flex-div'>
          <div className='nav-left flex-div'>
              <img src={menu_icon} alt='menu' onClick={()=>setsidebar(prev => prev===false?true:false)}></img>
              <Link to="/"><img className='logo' src={logo}/></Link>
          </div> 
          <div className='nav-middle flex-div'>
              <div className='search-box'>
                <input type='text' placeholder='Search' />
                <img src={search_icon} />
              </div>
          </div>
          <div className='nav-right flex-div'>
              <img src={upload_icon} alt="" />
              <img src={more_icon} alt="" />
              <img src={notification_icon} alt="" />
              <img className="user-icon" src={profile_icon} alt="" />
          </div>
    </nav>
  )
}

export default Navbar