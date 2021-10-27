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
        const {channelItemPageFlag, searchFlag, homeFlag, getmsgHolder} = this.props


        return (
            <div className='Contents'>
                <section className='top-bar'>
                    <TopBar 
                        settingPageFlag={this.props.settingPageFlag}
                        settingPageHandler={this.props.settingPageHandler}
                        channelItemPageFlag={this.props.channelItemPageFlag}
                        channelItemPageFlagHandler={this.props.channelItemPageFlagHandler}
                    />
                </section>
                <section className='main-contents'>
                    {channelItemPageFlag?
                    <tag><ChannelItemPage 
                            getmsgHolder={getmsgHolder}
                            videolinkHandler={this.props.videolinkHandler}
                        /></tag>:
                    // <Home/>
                    <tag>{searchFlag?
                        <Search/>:
                        <tag>
                            {homeFlag?<Home changeGetmsgHolder={this.props.changeGetmsgHolder}/>:
                            <Library/>}
                        </tag> 
                    }
                    </tag>
                    }
                </section>
            </div>
        )
    }
}
