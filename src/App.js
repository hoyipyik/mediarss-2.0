import React, { Component } from 'react'

import SideBar from "./container/SideBar/Sidebar"
import Contents from "./container/Contents/Contents"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='item'>
          <SideBar />
        </div>
        <div className='item'>
          <Contents />
        </div>
      </div>
    )
  }
}

export default App
