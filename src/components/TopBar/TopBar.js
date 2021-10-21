import React from 'react'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';


import "./TopBar.css"

const TopBar = () => {
    return (
        <div className='TopBar'>
            <div className='container'>
                <span id='back-icon'><ArrowBackIosIcon/></span>
                <span id='user-icon'><AccountCircleIcon/></span>
                <span id="setting-icon"><SettingsIcon/></span>
            </div>
            
        </div>
    )
}

export default TopBar
