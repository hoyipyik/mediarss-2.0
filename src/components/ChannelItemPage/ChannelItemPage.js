import React, { Component } from 'react'

import './ChannelItemPage.css'

export default class ChannelItemPage extends Component {
    
    componentDidMount(){
        console.log("item mount")
    }
    
    render() {
        const name = "TEDx"

        return (
            <div className='ChannelItemPage'>
                <div className='container'>
                    <header>
                        <img src='' className='channel-item-poster'/>
                        <h1 className='item-title'></h1>
                        <p className='item-intro'></p>
                    </header>
                    <section className='recent-item'>
                        <h4></h4>
                        <div className='item-container'>

                        </div>
                    </section>
                    <section className='more-item'>
                        <div className='item-container'>
                            
                        </div>  
                    </section>
                </div>
            </div>
        )
    }
}
