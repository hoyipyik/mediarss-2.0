import React, { Component } from 'react'

import Home from "../../components/Home/Home"
import Search from "../../components/Search/Search"

import "./Contents.css"

export default class Contents extends Component {
    render() {
        return (
            <div className='Contents'>
                <Home/>
                <Search/>
            </div>
        )
    }
}
