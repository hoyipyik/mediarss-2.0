import React, { Component } from 'react'

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DeleteIcon from '@material-ui/icons/Delete';
import './ItemPage.css'
// import image from "../../poster.jpeg"
import ItemCard from "../ItemCard/ItemCard"
import axios from "../../axios"

export default class ItemPage extends Component {

    state = {
        links: [],
        // pinned: false,
    }

    updateLinks = (getmsg, type) =>{
        type = "/" + type
        axios.get(type+getmsg+".json")
            .then(res=>{
                // console.log("/channel"+ getmsg +".json")
                const links = res.data.links
                // console.log(res.data.links)
                this.setState({
                    links: links,
                })
            })
            .catch(err=>console.log(err))
    }

    componentDidMount(){
        const [title, getmsg, icon, type, pinned, id, index] = this.props.getmsgHolder
        // console.log("[ChannelItemPage.js]: Mount")
        this.updateLinks(getmsg, type)
    }


    componentDidUpdate(prevProps, prevState){
        const [title, getmsg, icon, type, pinned, id, index] = this.props.getmsgHolder
        const [prevTitle, prevGetmsg, prevIcon, prevType] = prevProps.getmsgHolder
        if(prevProps.getmsgHolder !== this.props.getmsgHolder){
            this.updateLinks(getmsg, type)
        }
    }
    
    pinnedChangedHandler = () =>{   
        this.props.msgPinnedChanger()
        const [title, getmsg, poster, type, pinned, id, index] = this.props.getmsgHolder
        // console.log(title)
        let uploadItem = !pinned
        const passHolder = [index, type, uploadItem]
        this.props.pinnedPageLocalHandler(passHolder)
        // console.log(uploadItem)
        // uploadItem = 1
        axios.put(type+getmsg+"/pinned.json", uploadItem)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>console.log(err))
        let listFlag = type==="channel"?"/list":"/playlist"
        console.log(id, "This is ID commander")
        axios.put(listFlag+"/"+ id +"/pinned.json", uploadItem)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
        // console.log(!pinned)
    }

    pageRemover = () =>{
        let [title, getmsg, poster, type, pinned, id, index] = this.props.getmsgHolder
        const passHolder = [index, type]
        this.props.pageRemoveHandler(passHolder)
        
        // let flag1 = false
        // let flag2 = false
        axios.delete("/"+type+getmsg+".json")
            .then(res=>{
                // console.log(res)
                // flag1 = true
            })
            // .catch(err=>console.log(err))
        const addr = type==="channel"?"/list/":"/playlist/"
        axios.delete(addr+id+".json")
            .then(res=>{
                // console.log(res)
                // this.props.listChangedFlagHandler()
                this.props.channelItemPageFlagHandler()
                // setTimeout(()=>{
                    
                //     console.log("listChangedFlag works", "#$%^&*(&^%$##$%^&*&^%$#$%^")
                // }, 0)
                
                // flag2 = true
            })
            // .catch(err=>console.log(err))
        // if(flag1===true&&flag2===true){
            
        // }
    }

    rebuildArray= (num) =>{
        const [title, getmsg, poster, type, pinned, id, index] = this.props.getmsgHolder
        const {links} = this.state
        const newCard = links.filter((item, indexs)=>{
            return  indexs !== num
        })
        // console.log(newCard, "hey new card")
        this.setState({
            links: newCard,
        })
        axios.put("/library"+ getmsg +"/links.json", newCard)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    
    render() {
        let [title, getmsg, poster, type, pinned, id, index] = this.props.getmsgHolder
        // console.log(poster)
        const name = type.toUpperCase()
        const {links} = this.state
        const card = links.map((item, index) =>{
            return <ItemCard rebuildArray={this.rebuildArray} getmsg={getmsg} type={type} index={index} item={item} videolinkHandler={this.props.videolinkHandler} type={type}/>
        })
        
        return (
            <div className='ChannelItemPage'>
                <div className='container'>
                    <header>
                        <img src={poster} className='channel-item-poster'/>
                        <h3>{name}</h3>
                        <h1 className='item-title'>{title}</h1>
                        <tag onClick={this.pageRemover} className="delete"><DeleteIcon/></tag>
                        <span onClick={this.pinnedChangedHandler} id='pin-icon'>{pinned?<BookmarkIcon/>:<BookmarkBorderIcon />}</span>
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
