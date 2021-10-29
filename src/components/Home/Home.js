import React, { Component } from 'react'
import axios from '../../axios'

import "./Home.css"
// import poster from "../../poster.jpeg"

export default class Home extends Component {
    state = {
        list: [],
    }

    componentDidMount(){
        axios.get("list.json")
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
            const msg = [title, getmsg, icon, "channel", pinned, index]
            // console.log(msg)
            return(
                // 
            <div key={index} className='channel-item' onClick={()=>this.props.changeGetmsgHolder(msg)}>
                <figure>
                    <img alt="channel-item-poster" src={icon}/>
                    <figcaption>{title}</figcaption>
                </figure>
            </div>)
        })

            
 
        return (
            <div className='Home'>
                <div className='container'>
                    <h1>Channels</h1>
                    {/* <h4>Pinned</h4>
                    <section className='pinned-channels'>
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                        {channelItem}
                    </section> */}
                    <h4>Full List</h4>
                    <section className='common-channels'>
                        {channelItem}
                        {/* {channelItem} */}
                    </section>
                </div>
            </div>
        )
    }
}
