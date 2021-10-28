import React, { Component } from 'react'
import axios from "../../axios"
import "./ChannelList.css"

export default class ChannelList extends Component {

    state = {
        list: [],
    }

    componentDidMount(){
        // console.log("[ChannelList.js]: Mount")
        axios.get("/list.json")
            .then(res=>{
                const data = res.data
                // console.log(res.data)
                this.setState({
                    list: data
                })
            })
    }



    render() {
        const list = [...this.state.list]
        const listItem = list.map((item, index) =>{
            // console.log(item.title, "*********")
            const msg = [item.title, item.getmsg, item.icon, "channels", item.pinned]
            return  <div 
                    key={index} 
                    className='channelList-item'
                    onClick={()=>this.props.changeGetmsgHolder(msg)}    
                ><p>{item.title}</p></div>
        })

        return (
            <div className='ChannelList'>
                {listItem}
            </div>
        )
    }
}
