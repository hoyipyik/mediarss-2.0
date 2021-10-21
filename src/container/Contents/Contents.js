import React, { Component } from 'react'

import Home from "../../components/Home/Home"
import Search from "../../components/Search/Search"
import TopBar from '../../components/TopBar/TopBar'

import "./Contents.css"

export default class Contents extends Component {
    render() {
        return (
            <div className='Contents'>
                <section className='top-bar'>
                    <TopBar/>
                </section>
                <section className='main-contents'>
                    <Home/>
                    {/* <Search/> */}
                </section>
            </div>
        )
    }
}
