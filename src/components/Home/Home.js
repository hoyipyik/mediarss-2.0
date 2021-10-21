import React, { Component } from 'react'

import "./Home.css"

export default class Home extends Component {
    render() {

        const channelItem = 
            <div className='channel-item'>
                <figure>
                    <img src='https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcT1YLzPewVnZ_uYNyyZooUeUP5PJMemi1tcpDNUQ1O-0GNV4k8O%26s&sp=1634803883T4594da3458a58732a823cf29bb470b470d1689d86cc0f6a9d7fa686bc224b62c'/>
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
