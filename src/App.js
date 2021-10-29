import React, { Component } from 'react'

import SideBar from "./container/SideBar/Sidebar"
import Contents from "./container/Contents/Contents"
import AddButton from "./components/AddButton/AddButton"
import AddPage from './components/AddPage/AddPage'
import Backdrop from './components/Backdrop/Backdrop'
import SettingPage from "./components/SettingPage/SettingPage"
import PlayPage from './components/PlayPage/PlayPage'

import "./App.css"
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
    listChangedFlag: false,
  }

  listChangedFlagHandler= () =>{
    const {listChangedFlag} = this.state
    this.setState({
        listChangedFlag: !listChangedFlag
    })
}

  msgPinnedChanger = () =>{
    let [title, getmsg, icon, type, pinned, index] = this.state.getmsgHolder
    this.setState({
      getmsgHolder: [title, getmsg, icon, type, !pinned, index],
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

  render() {
    const {addPageFlag, getmsgHolder, playFlag, videolink, listChangedFlag,
      channelItemPageFlag, searchFlag, 
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
              listChangedFlag={listChangedFlag}
              listChangedFlagHandler={this.listChangedFlagHandler}
              changeGetmsgHolder={this.changeGetmsgHolder}
              homeFlag={homeFlag}
              homeHandler={this.homeHandler}
              libraryHandler={this.libraryHandler}
              searchHandler = {this.searchHandler}
              />
          </div>
          <div className='item2'>
            <Contents
              listChangedFlag={listChangedFlag}
              listChangedFlagHandler={this.listChangedFlagHandler}
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
