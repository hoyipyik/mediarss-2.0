import React, { Component } from 'react'

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import './ChannelItemPage.css'
import image from "../../poster.jpeg"
import ItemCard from "../ItemCard/ItemCard"

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
                        <img src={image} className='channel-item-poster'/>
                        <h3>Channels</h3>
                        <h1 className='item-title'>TEDx</h1>
                        <span id='pin-icon'><BookmarkBorderIcon /></span>
                        {/* <p className='item-intro'>This is TEDx Channel</p> */}
                    </header>
                    <section className='recent-item'>
                        <h4>Recent</h4>
                        <div className='item-container'>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                        </div>
                    </section>
                    <section className='more-item'>
                        <h4>More</h4>
                        <div className='item-container'>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                        </div>  
                    </section>
                </div>
            </div>
        )
    }
}
