import React, { Component } from 'react'

import SearchIcon from '@material-ui/icons/Search';
import "./Search.css"

export default class Search extends Component {
    render() {
        return (
            <div className='Search'>
                <div className='container'>
                    <section className="search">    
                        <h1>Search</h1>
                        <input />
                        <span><SearchIcon /></span>
                    </section>

                    <section className='contents'>

                    </section>
                </div>
            </div>
        )
    }
}
