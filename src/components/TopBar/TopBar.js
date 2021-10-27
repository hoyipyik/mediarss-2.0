import React from 'react'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';

import "./TopBar.css"

const TopBar = (props) => {
    return (
        <div className='TopBar'>
            <div className='container'>
                <span id='back-icon' onClick={props.channelItemPageFlagHandler}><ArrowBackIosIcon/></span>
                <span id='user-icon'><AccountCircleIcon/></span>
                <span id="setting-icon" onClick={props.settingPageHandler}><SettingsIcon/></span>
            </div>
            
        </div>
    )
}

export default TopBar
