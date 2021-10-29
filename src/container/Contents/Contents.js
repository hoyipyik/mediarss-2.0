// import { LibraryAdd } from '@material-ui/icons'
import React, { Component } from 'react'

import ItemPage from '../../components/ItemPage/ItemPage'
import Home from "../../components/Home/Home"
import Search from "../../components/Search/Search"
import TopBar from '../../components/TopBar/TopBar'
import Library from '../../components/Library/Library'

import "./Contents.css"

export default class Contents extends Component {

    state = {
        
    }

    


    render() {
        const {channelItemPageFlag, searchFlag, homeFlag, getmsgHolder, listChangedFlag} = this.props

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
                    <tag><ItemPage 
                            listChangedFlagHandler={this.props.listChangedFlagHandler}
                            channelItemPageFlagHandler={this.props.channelItemPageFlagHandler}
                            msgPinnedChanger={this.props.msgPinnedChanger}
                            getmsgHolder={getmsgHolder}
                            videolinkHandler={this.props.videolinkHandler}
                        /></tag>:
                    // <Home/>
                    <tag>{searchFlag?
                        <Search/>:
                        <tag>
                            {homeFlag?<Home 
                                changeGetmsgHolder={this.props.changeGetmsgHolder}
                                listChangedFlag={listChangedFlag}/>:
                            <Library
                                changeGetmsgHolder={this.props.changeGetmsgHolder}
                                listChangedFlag={listChangedFlag}
                                />}
                        </tag> 
                    }
                    </tag>
                    }
                </section>
            </div>
        )
    }
}
