import React, { Component } from 'react'

import "./Playlist.css"
import axios from "../../axios"

export default class Playlist extends Component {
    state = {
        playlist: [],
    }

    componentDidMount(){
        // console.log("[ChannelList.js]: Mount")
        axios.get("/playlist.json")
            .then(res=>{
                const data = res.data
                // console.log(res.data)
                this.setState({
                    playlist: data
                })
            })
    }



    render() {
        const list = [...this.state.playlist]
        const listItem = list.map((item, index) =>{
            // console.log(item.title, "*********")
            const msg = [item.title, item.getmsg, item.icon, "library",item.pinned, index ]
            return  <div 
                    key={index} 
                    className='playlist-item'
                    onClick={()=>this.props.changeGetmsgHolder(msg)}    
                ><p>{item.title}</p></div>
        })

        return (
            <div className='Playlist'>
                {listItem}
            </div>
        )
    }
}


