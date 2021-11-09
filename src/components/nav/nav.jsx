import React from 'react'
import './nav.scss'

const Nav = (props) => {
    const {title} = props
    return (
        <div className="nav d-flex align-items-center justify-content-center">
            <div className="nav__left"></div>
            <div className="nav__center">{title}</div>
            
        </div>
    )
}

export default Nav
