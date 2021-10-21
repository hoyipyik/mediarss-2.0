import React from 'react'

import { Backdrop as Bdrop } from '@material-ui/core';

import "./Backdrop.css"

const Backdrop = (props) => {
    
    return (
        <div className='Backdrop'>
            <Bdrop open={true} onClick={props.addButtonHandler}/>
        </div>
    )
}

export default Backdrop
