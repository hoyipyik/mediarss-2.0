import React, { Component } from 'react'

import "./AddPage.css"

export default class AddPage extends Component {
    render() {
        return (
            <div className='AddPage'>
                <div className='container'>
                    <h1>Subscribe Page</h1>
                    <input placeholder="Paste the link of channel's main page"/>
                    <button>Subscribe</button>
                </div>
            </div>
        )
    }
}
