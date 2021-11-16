import React from 'react'
import './higher.scss'
import Nav from '../../components/nav/nav'
import { Button } from '@material-ui/core'

const Higher = (props) => {
    const {deckOfCards} = props

    let copy = [...deckOfCards()];


    let random = 52;
    const dealtCard = Math.floor(Math.random()*random);
    const getRandomCard = () => {
        random--;
        return copy[dealtCard];
    }
    console.log(getRandomCard());

    const removeCard = () => {
        copy[dealtCard] = copy[copy.length-1];
        copy.pop();
        return copy;
    }

    const callBoth = () => {
        return getRandomCard(), removeCard();
    }
    console.log(callBoth());

    return (
        <div className="higher">
            <Nav title="Higher or Lower" goBack={true}/>
            <div className="higher__content">
            <Button onClick={callBoth()}>fat mf</Button>
            </div>
        </div>
    )
}

export default Higher
