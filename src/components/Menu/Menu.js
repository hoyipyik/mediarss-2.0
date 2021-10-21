import React from 'react'

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import "./Menu.css"

const  Menu = (props) =>{
    return (
        <div className='Menu'>
            <div className='menu-item'>
                <span><SubscriptionsIcon/></span>
                <span className='label'>Channels</span>
            </div>
            
            <div className='menu-item'>
                <span><SearchIcon/></span>
                <span className='label'>Search</span>
            </div>
            
            <div className='menu-item'>
                <span><VideoLibraryIcon/></span>
                <span className='label'>Collections</span>
            </div>
            
        </div>
    )
}

export default Menu
