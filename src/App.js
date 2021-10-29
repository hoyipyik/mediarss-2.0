import React, { Component } from 'react'

import SideBar from "./container/SideBar/Sidebar"
import Contents from "./container/Contents/Contents"
import AddButton from "./components/AddButton/AddButton"
import AddPage from './components/AddPage/AddPage'
import Backdrop from './components/Backdrop/Backdrop'
import SettingPage from "./components/SettingPage/SettingPage"
import PlayPage from './components/PlayPage/PlayPage'

import "./App.css"
import axios from './axios'
// import { FlashAuto } from '@material-ui/icons'

class App extends Component {
  state= {
    addPageFlag: false,
    channelItemPageFlag: false,
    homeFlag: true,
    searchFlag: false,
    settingPageFlag: false,
    getmsgHolder: [],
    videolink: '',
    playFlag: false,
    // listChangedFlag: false,
    list: [],
    playlist: [],
  }

  componentDidMount(){
    axios.get("/list.json")
      .then(res=>{
        console.log(res, "[App.js]: Mount list")
        this.setState({
          list: Object.values(res.data)
        })
      })
      .catch(err=>console.log(err))

    axios.get("/playlist.json")
      .then(res=>{
        console.log(res, "[App.js]: Mount Playlist")
        this.setState({
          playlist: Object.values(res.data)
        })
      })
      .catch(err=>console.log(err))
  }

//   listChangedFlagHandler= () =>{
//     const {listChangedFlag} = this.state
//     this.setState({
//         listChangedFlag: !listChangedFlag
//     })
// }

  msgPinnedChanger = () =>{
    let [title, getmsg, icon, type, pinned, id, index] = this.state.getmsgHolder
    this.setState({
      getmsgHolder: [title, getmsg, icon, type, !pinned, id, index],
    })
  }

  changeGetmsgHolder = (msg) =>{
     this.setState({
       getmsgHolder: msg,
       channelItemPageFlag: true,
     })
  }


  addButtonHandler = () =>{
    const {addPageFlag} = this.state
    this.setState({
      addPageFlag: !addPageFlag
    })
  }

  settingPageHandler = () =>{
    const {settingPageFlag} = this.state
    this.setState({
      settingPageFlag: !settingPageFlag
    })
  }

  playFlagHandler = ()=>{
    const {playFlag} = this.state
    this.setState({
      playFlag: !playFlag
    })
  }

  channelItemPageFlagHandler = () =>{
    const {channelItemPageFlag} = this.state
    if(channelItemPageFlag)
    this.setState({
        channelItemPageFlag: false,
    })
  }

  homeHandler = () =>{
    // const {channelItemPageFlag, homeFlag} = this.state
    this.setState({
      channelItemPageFlag: false,
      homeFlag: true,
      searchFlag: false,
    })
  }

  libraryHandler = () =>{
    this.setState({
      channelItemPageFlag: false,
      homeFlag: false,
      searchFlag: false,
    })
  }

  searchHandler = ()=>{
    this.setState({
      channelItemPageFlag: false,
      searchFlag: true,
    })
  }

  videolinkHandler = (link) =>{
    this.setState({
      videolink: link,
      playFlag: true,
    })
  }

  pageRemoveHandler= (holder) =>{
    const [index, type] = holder
    const {list, playlist} = this.state
    const listHolder = type==="channel"?list:playlist
    const nameHolder = type==="channel"?"list":"playlist"
    const newList = listHolder.filter((item, num)=>{
      return index !== num
    })
    this.setState({
      [nameHolder]: [...newList]
    })
  } 
 
  pinnedPageLocalHandler = (holder) =>{
    const [index, type, uploadItem] = holder
    const {list, playlist} = this.state
    const listHolder = type==="channel"?list:playlist
    const nameHolder = type==="channel"?"list":"playlist"
    let newList = [...listHolder]
    newList[index].pinned = uploadItem
    this.setState({
      [nameHolder]: [...newList]
    })
  }


  render() {
    const {addPageFlag, getmsgHolder, playFlag, videolink, 
      channelItemPageFlag, searchFlag, list, playlist,
      homeFlag, settingPageFlag} = this.state
    return (
      <div className='App'>
        {addPageFlag?
        <section className='floatover-page'>
          <Backdrop addButtonHandler={this.addButtonHandler}/>
          <AddPage/>
        </section>:null}

        {settingPageFlag?
        <section className='floatover-page'>
          <Backdrop addButtonHandler={this.settingPageHandler}/>
          <SettingPage/>
        </section>:null}

        {playFlag?
        <section className='floatover-page'>
          <Backdrop addButtonHandler={this.playFlagHandler}/>
          <PlayPage link={videolink}/>
        </section>:null}

        <section className='container'>
          <div className='item1'>
            <SideBar
              list={list} playlist={playlist}
              changeGetmsgHolder={this.changeGetmsgHolder}
              homeFlag={homeFlag}
              homeHandler={this.homeHandler}
              libraryHandler={this.libraryHandler}
              searchHandler = {this.searchHandler}
              />
          </div>
          <div className='item2'>
            <Contents
              list={list} playlist={playlist}
              pinnedPageLocalHandler={this.pinnedPageLocalHandler}
              pageRemoveHandler={this.pageRemoveHandler}
              msgPinnedChanger={this.msgPinnedChanger}
              changeGetmsgHolder={this.changeGetmsgHolder}
              videolinkHandler={this.videolinkHandler}
              getmsgHolder={getmsgHolder}
              searchFlag={searchFlag}
              homeFlag={homeFlag}
              settingPageFlag={settingPageFlag}
              settingPageHandler={this.settingPageHandler}
              channelItemPageFlag={channelItemPageFlag}
              channelItemPageFlagHandler={this.channelItemPageFlagHandler}
              />
          </div>
        </section>

        <section className='add-button'>
          <AddButton addButtonHandler={this.addButtonHandler}/>
        </section>
      </div>
    )
  }
}

export default App
