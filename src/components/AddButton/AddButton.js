import React from 'react'

import "./AddButton.css"
// import AddCircleIcon from '@material-ui/icons/AddCircle';

const AddButton = (props) => {
    return (
        <div className='AddButton' onClick={props.addButtonHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="48" height="48"
                viewBox="0 0 171 171">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,171.99797v-171.99797h171.99797v171.99797z" fill="none"></path><g><path d="M156.75,85.5c0,39.34781 -31.90219,71.25 -71.25,71.25c-39.34781,0 -71.25,-31.90219 -71.25,-71.25c0,-39.34781 31.90219,-71.25 71.25,-71.25c39.34781,0 71.25,31.90219 71.25,71.25z" fill="#146daa"></path><path d="M78.375,53.4375h14.25v64.125h-14.25z" fill="#ffffff"></path><path d="M53.4375,78.375h64.125v14.25h-64.125z" fill="#ffffff"></path></g></g>
            </svg>
        </div>
    )
}

export default AddButton
