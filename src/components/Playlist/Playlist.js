import React, { Component } from 'react'

import "./Playlist.css"
import axios from "../../axios"

export default class Playlist extends Component {
    state = {
        playlist: [],
    }

    updateList = () =>{
        axios.get("playlist.json")
            .then(res=>{
                this.setState({
                    playlist: Object.values(res.data)
                })
            })
    }

    componentDidMount(){
        this.updateList()
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.listChangedFlag!==this.props.listChangedFlag){
            this.updateList()
        }
    }



    render() {
        const list = [...this.state.playlist]
        const listItem = list.map((item, index) =>{
            // console.log(item.title, "*********")
            const msg = [item.title, item.getmsg, item.icon, "library",item.pinned, item.id ]
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


