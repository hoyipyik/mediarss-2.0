import { LibraryAdd } from '@material-ui/icons'
import React, { Component } from 'react'

import ChannelItemPage from '../../components/ChannelItemPage/ChannelItemPage'
import Home from "../../components/Home/Home"
import Search from "../../components/Search/Search"
import TopBar from '../../components/TopBar/TopBar'
import Library from '../../components/Library/Library'

import "./Contents.css"

export default class Contents extends Component {

    state = {
        
    }


    render() {
        const {channelItemPageFlag, searchFlag, homeFlag} = this.props


        return (
            <div className='Contents'>
                <section className='top-bar'>
                    <TopBar 
                        channelItemPageFlag={this.props.channelItemPageFlag}
                        channelItemPageFlagHandler={this.props.channelItemPageFlagHandler}
                    />
                </section>
                <section className='main-contents'>
                    {channelItemPageFlag?
                    <ChannelItemPage/>:
                    <div>{searchFlag?
                        <Search/>:
                        <div>
                            {homeFlag?<Home/>:
                            <Library/>}
                        </div> 
                    }
                    </div>
                    }
                </section>
            </div>
        )
    }
}
