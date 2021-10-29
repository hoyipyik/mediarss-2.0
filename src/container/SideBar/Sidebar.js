import React, { Component } from 'react'

import Menu from "../../components/Menu/Menu"
import Playlist from "../../components/Playlist/Playlist"
import ChannelList from "../../components/ChannelList/ChannelList"

import "./Sidebar.css"

class Sidebar extends Component {
    render() {
        const {homeFlag, listChangedFlag, list, playlist} = this.props
        return (
            <div className='Sidebar'>
                <h1>Media Rss</h1>
                <div className='side-menu'>
                    <Menu 
                        homeHandler={this.props.homeHandler}
                        searchHandler={this.props.searchHandler}
                        libraryHandler={this.props.libraryHandler}
                    />
                </div>
                <div className='side-list'>
                    {!homeFlag?<Playlist playlist={playlist} listChangedFlag={listChangedFlag} changeGetmsgHolder={this.props.changeGetmsgHolder}/>:
                    <ChannelList  list={list} listChangedFlag={listChangedFlag} changeGetmsgHolder={this.props.changeGetmsgHolder}/> }
                </div> 
            </div>
            
        )
    }
}

export default Sidebar
