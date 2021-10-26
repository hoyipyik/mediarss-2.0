import React, { Component } from 'react'

import "./Home.css"
import poster from "../../poster.jpeg"

export default class Home extends Component {
    render() {

        const channelItem = 
            <div className='channel-item'>
                <figure>
                    <img src={poster}/>
                    <figcaption>Hi Spotify</figcaption>
                </figure>
            </div>
 
        return (
            <div className='Home'>
                <div className='container'>
                    <h1>Channels</h1>
                    <h4>Pinned</h4>
                    <section className='pinned-channels'>
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                    </section>
                    <h4>Full List</h4>
                    <section className='common-channels'>
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                    </section>
                </div>
            </div>
        )
    }
}
