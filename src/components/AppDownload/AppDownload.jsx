import React from 'react'
import './AppDownload.css'
import {assets1} from '../../assets/frontend_assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For better experience Download <br/> Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets1.play_store} alt=""></img>
            <img src={assets1.app_store} alt = ""/>
        </div>
    </div>
  )
}

export default AppDownload
