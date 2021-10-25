import React, { Component } from 'react'

import SideBar from "./container/SideBar/Sidebar"
import Contents from "./container/Contents/Contents"
import AddButton from "./components/AddButton/AddButton"
import AddPage from './components/AddPage/AddPage'
import Backdrop from './components/Backdrop/Backdrop'

import "./App.css"

class App extends Component {
  state= {
    addPageFlag: false,
    channelItemPageFlag: true,
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
        channelItemPageFlag: !channelItemPageFlag
    })
  }

  render() {
    const {addPageFlag, channelItemPageFlag} = this.state
    return (
      <div className='App'>
        {addPageFlag?
        <section className='add-page'>
          <Backdrop addButtonHandler={this.addButtonHandler}/>
          <AddPage/>
        </section>:null}

        <section className='container'>
          <div className='item1'>
            <SideBar HomeHandler={this.channelItemPageFlagHandler}/>
          </div>
          <div className='item2'>
            <Contents 
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
