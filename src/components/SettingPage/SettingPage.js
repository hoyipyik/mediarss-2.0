import React, { Component } from 'react'

import "./SettingPage.css"

export default class SettingPage extends Component {
    render() {
        return (
            <div className='SettingPage'>
                <div className='container'>
                    <h1>Setting Page</h1>
                    <p>Your Media Rss is always yours, so you can design your toolbox on your own :)</p>
                    {/* <input placeholder="Paste the link of channel's main page"/> */}
                    <button>Save</button>
                </div>
        
            </div>
        )
    }
}
