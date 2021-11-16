import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Footer from '../../components/footer/footer'
import Nav from '../../components/nav/nav'
import './home.scss'

const Home = () => {

    return (
        <div className="home">
            <Nav title="Home" goBack={false}/>
            <div className="home__content">
                <Link to="/higher">
                    <div className="home__content-higher">higher</div>
                </Link>
                <div className="home__content-shithead">shithead</div>
                <div className="home__content-blackjack">blackjack</div>
                <div className="home__content-bus">bus</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
