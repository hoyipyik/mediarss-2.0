import React, { Component } from 'react'

import Home from "../../components/Home/Home"
import Search from "../../components/Search/Search"

import "./Contents.css"

export default class Contents extends Component {
    render() {
        return (
            <div className='Contents'>
                <section className='top-bar'>
                    <h3>This is topbar</h3>
                </section>
                <section className='main-contents'>
                    <Home/>
                    {/* <Search/> */}
                </section>
            </div>
        )
    }
}
