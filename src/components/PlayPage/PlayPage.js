import React, { Component } from 'react'

import "./PlayPage.css"

export default class PlayPage extends Component {
    render() {
        const link = this.props.link
        return (
            <div className='PlayPage'>
                <div className='container'>
                    {/* <h1>Subscribe Page</h1>
                    <input placeholder="Paste the link of channel's main page"/>
                    <button>Subscribe</button> */}
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src={link} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture" 
                        allowfullscreen/>
                </div>
        
            </div>
        )
    }
}
