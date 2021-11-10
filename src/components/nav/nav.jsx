import React from 'react';
import './nav.scss';
import { RiArrowGoBackLine } from "react-icons/ri";
import { useHistory } from 'react-router'

const Nav = (props) => {
    const {title, goBack} = props
    const history = useHistory();

    return (
        <div className="nav d-flex align-items-center justify-content-center">
            {goBack ? <div className="nav__left col-3 d-flex align-items-center justify-content-start" onClick={()=>history.push('/')}><RiArrowGoBackLine/> Go Back</div> : <div className="nav__left col-3 d-flex align-items-center justify-content-start "></div>}
            <div className="nav__center col-6 d-flex align-items-center justify-content-center">{title}</div>
            <div className="nav__right col-3"></div>
        </div>
    )
}

export default Nav
