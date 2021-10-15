import React, { Component } from 'react'

import Menu from "../../components/Menu/Menu"
import Playlist from "../../components/Playlist/Playlist"
import ChannelList from "../../components/ChannelList/ChannelList"

import "./Sidebar.css"

export default class Sidebar extends Component {
    render() {
        return (
            <div className='Sidebar'>
                <div className='item'>
                    <Menu/>
                </div>
                <div className='item'>
                    <div className='sub-item'>
                        <Playlist/>
                    </div>
                    <div className='sub-item'>
                        <ChannelList/>
                    </div>
                </div>
            </div>
        )
    }
}
