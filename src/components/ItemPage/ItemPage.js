import React, { Component } from 'react'

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import './ItemPage.css'
import image from "../../poster.jpeg"
import ItemCard from "../ItemCard/ItemCard"

import axios from "../../axios"

export default class ItemPage extends Component {

    state = {
        links: [],
    }

    updateLinks = (getmsg, type) =>{
        type = "/" + type
        axios.get(type+getmsg+".json")
            .then(res=>{
                // console.log("/channels"+ getmsg +".json")
                const links = res.data.links
                console.log(res.data.links)
                this.setState({
                    links: links,
                })
            })
    }

    componentDidMount(){
        const [title, getmsg, icon, type] = this.props.getmsgHolder
        // console.log("[ChannelItemPage.js]: Mount")
        this.updateLinks(getmsg, type)
    }


    componentDidUpdate(prevProps, prevState){
        const [title, getmsg, icon, type] = this.props.getmsgHolder
        const [prevTitle, prevGetmsg, prevIcon, prevType] = prevProps.getmsgHolder
        if(prevGetmsg !== getmsg){
            this.updateLinks(getmsg, type)
        }
    }
    
    
    render() {
        const [title, getmsg, poster, type, pinned] = this.props.getmsgHolder
        // console.log(poster)
        const name = type.toUpperCase()
        const {links} = this.state
        const card = links.map((item, index) =>{
            return <ItemCard item={item} videolinkHandler={this.props.videolinkHandler} type={type}/>
        })
        
        return (
            <div className='ChannelItemPage'>
                <div className='container'>
                    <header>
                        <img src={poster} className='channel-item-poster'/>
                        <h3>{name}</h3>
                        <h1 className='item-title'>{title}</h1>
                        <span id='pin-icon'>{pinned?<BookmarkIcon/>:<BookmarkBorderIcon />}</span>
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
