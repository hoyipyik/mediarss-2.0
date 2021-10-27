import React, { Component } from 'react'

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import './ChannelItemPage.css'
import image from "../../poster.jpeg"
import ItemCard from "../ItemCard/ItemCard"

import axios from "../../axios"

export default class ChannelItemPage extends Component {

    state = {
        links: [],
    }

    updateLinks = (getmsg) =>{
        axios.get("/channels"+getmsg+".json")
            .then(res=>{
                const links = res.data.links
                console.log(res.data.links)
                this.setState({
                    links: links,
                })
            })
    }

    componentDidMount(){
        const [title, getmsg] = this.props.getmsgHolder
        this.updateLinks(getmsg)
    }


    componentDidUpdate(prevProps, prevState){
        const [title, getmsg] = this.props.getmsgHolder
        const [prevTitle, prevGetmsg] = prevProps.getmsgHolder
        if(prevGetmsg !== getmsg){
            this.updateLinks(getmsg)
        }
    }
    
    
    render() {
        const [title, getmsg, poster] = this.props.getmsgHolder
        // console.log(poster)
        const {links} = this.state
        const card = links.map((item, index) =>{
            return <ItemCard item={item} videolinkHandler={this.props.videolinkHandler}/>
        })

        return (
            <div className='ChannelItemPage'>
                <div className='container'>
                    <header>
                        <img src={poster} className='channel-item-poster'/>
                        <h3>Channels</h3>
                        <h1 className='item-title'>{title}</h1>
                        <span id='pin-icon'><BookmarkBorderIcon /></span>
                        {/* <p className='item-intro'>This is TEDx Channel</p> */}
                    </header>
                    {/* <section className='recent-item'>
                        <h4>Recent</h4>
                        <div className='item-container'>
                            
                        </div>
                    </section> */}
                    <section className='more-item'>
                        <h4>More</h4>
                        <div className='item-container'>
                            {card}
                        </div>  
                    </section>
                </div>
            </div>
        )
    }
}
