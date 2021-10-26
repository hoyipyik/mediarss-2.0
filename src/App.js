import React, { Component } from 'react'

import SideBar from "./container/SideBar/Sidebar"
import Contents from "./container/Contents/Contents"
import AddButton from "./components/AddButton/AddButton"
import AddPage from './components/AddPage/AddPage'
import Backdrop from './components/Backdrop/Backdrop'

import "./App.css"
import { FlashAuto } from '@material-ui/icons'

class App extends Component {
  state= {
    addPageFlag: false,
    channelItemPageFlag: true,
    homeFlag: true,
    searchFlag: true,
  }


  addButtonHandler = () =>{
    const {addPageFlag} = this.state
    this.setState({
      addPageFlag: !addPageFlag
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

  render() {
    const {addPageFlag, channelItemPageFlag, searchFlag, homeFlag} = this.state
    return (
      <div className='App'>
        {addPageFlag?
        <section className='add-page'>
          <Backdrop addButtonHandler={this.addButtonHandler}/>
          <AddPage/>
        </section>:null}

        <section className='container'>
          <div className='item1'>
            <SideBar 
              homeHandler={this.homeHandler}
              libraryHandler={this.libraryHandler}
              searchHandler = {this.searchHandler}
              />
          </div>
          <div className='item2'>
            <Contents 
              searchFlag={searchFlag}
              homeFlag={homeFlag}
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
