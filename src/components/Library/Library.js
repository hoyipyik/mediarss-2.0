import React, { Component } from 'react'

import axios from '../../axios'
import "./Library.css"

export default class Library extends Component {
    state = {
        list: [],
    }

    componentDidMount(){
        axios.get("playlist.json")
            .then(res=>{
                this.setState({
                    list: res.data
                })
            })
    }

    render() {
        const {list} = this.state
        const channelItem = list.map((item, index)=>{
            const title = item.title
            const icon = item.icon
            const getmsg = item.getmsg
            const pinned = item.pinned
            const msg = [title, getmsg, icon, "library", pinned, index]
            // console.log(msg)
            return(
                // 
            <div className='playlist-item' onClick={()=>this.props.changeGetmsgHolder(msg)}>
                <figure>
                    <img alt='playlist-item-poster' src={icon}/>
                    <figcaption>{title}</figcaption>
                </figure>
            </div>)
        })

            
 
        return (
            <div className='Library'>
                <div className='container'>
                    <h1>Library</h1>
                    {/* <h4>Pinned</h4>
                    <section className='pinned-playlist'>
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                    </section> */}
                    <h4>Full List</h4>
                    <section className='common-playlist'>
                        {channelItem}
                        {/* {channelItem} */}
                    </section>
                </div>
            </div>
        )
    }
}
