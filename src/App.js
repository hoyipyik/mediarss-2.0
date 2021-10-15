import React, { Component } from 'react'

import SideBar from "./container/SideBar/Sidebar"
import Contents from "./container/Contents/Contents"
import AddButton from "./components/AddButton/AddButton"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className='App'>
        <section className='container'>
          <div className='item'>
            <SideBar />
          </div>
          <div className='item'>
            <Contents />
          </div>
        </section>

        <section className='add-button'>
          <AddButton />
        </section>
        
      </div>
    )
  }
}

export default App
