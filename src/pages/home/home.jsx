import React from 'react'
import Footer from '../../components/footer/footer'
import Nav from '../../components/nav/nav'
import './home.scss'

const Home = () => {

    return (
        <div className="home">
            <Nav title="Home" goBack={false}/>
            <div className="home__content">
                <div className="home__content-higher"></div>
                <div className="home__content-shithead"></div>
                <div className="home__content-blackjack"></div>
                <div className="home__content-bus"></div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
