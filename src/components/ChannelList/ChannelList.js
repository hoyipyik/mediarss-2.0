import React, { Component } from 'react'
import axios from "../../axios"
import "./ChannelList.css"

export default class ChannelList extends Component {

    state = {
        list: [],
    }

    updateList = () =>{
        axios.get("list.json")
            .then(res=>{
                this.setState({
                    list: Object.values(res.data)
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
        const list = [...this.state.list]
        const listItem = list.map((item, index) =>{
            // console.log(item.title, "*********")
            const msg = [item.title, item.getmsg, item.icon, "channel", item.pinned, item.id]
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
