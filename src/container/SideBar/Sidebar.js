import React, { Component } from 'react'

import Menu from "../../components/Menu/Menu"
import Playlist from "../../components/Playlist/Playlist"
import ChannelList from "../../components/ChannelList/ChannelList"

import "./Sidebar.css"

class Sidebar extends Component {
    render() {
        return (
            <div className='Sidebar'>
                <h1>Media Rss</h1>
                <div className='side-menu'>
                    <Menu/>
                </div>
                <div className='side-list'>
                    <Playlist/>
                    {/* <ChannelList/>  */}
                </div> 
            </div>
            
        )
    }
}

export default Sidebar
