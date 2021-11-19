import {React, useState, useEffect} from 'react'
import ReactDOM, { render } from 'react-dom';
import './higher.scss'
import Nav from '../../components/nav/nav'
import { Button } from '@material-ui/core'

const Higher = (props) => {

    const {deckOfCards} = props; 
    const [randomValue, setRandomValue] = useState(); 
    const [dealtCardIndex, setDealtCardIndex] = useState(0); 
    const [dealtCardIndexArr, setDealtCardIndexArr] = useState([]);
    const [deck, setDeck] = useState(deckOfCards()); 

    const setupIndexArr = () => {
        // make an array of indices with 52 numbers, 0-52 and set it to a state. 
        let dealtCardIndexArrTemp = [];
        for (let i=0; i<52; i++) {
            dealtCardIndexArrTemp.push(i); 
        }
        setDealtCardIndexArr(dealtCardIndexArrTemp); 
    }
    // state changes are asynchronous, meaning to log the updated values you must log in a function defined in a useEffect, which will log to the console whenever the value of deck state or dealtCardIndexArr changes. 
    const logValues = () => {
        console.log(deck); 
        console.log(dealtCardIndexArr); 
    }

    useEffect(setupIndexArr, []); 
    useEffect(logValues, [deck, dealtCardIndexArr]); 

    const getRandomCard = () => {
        // generate random index from array of indices. 
        setDealtCardIndex(Math.floor(Math.random()*dealtCardIndexArr.length));
        // return the card. 
        setRandomValue(deck[dealtCardIndex].Value)
    }
    const removeCard = () => {
        // Make sure there are cards left to remove in the deck
        if (dealtCardIndexArr.length > 0) {
            console.log(dealtCardIndex);
            // remove the card from the deck array and also remove the index from the indexes array.  
            setDeck(deck.filter(item => item !== deck[dealtCardIndex])); 
            setDealtCardIndexArr(dealtCardIndexArr.filter(item => item !== dealtCardIndexArr[dealtCardIndex] ))
        } else {
            console.log("All cards have been removed already.")
        }
        
    }
    const getCardAndRemoveIt = () => {
        getRandomCard(); 
        removeCard();
    }

    return (
        <div className="higher">
            <Nav title="Higher or Lower" goBack={true}/>
            <div className="higher__content">
                <Button variant="contained" onClick={getCardAndRemoveIt}>Action</Button>
                <div id="higherValue">
                    <p>{randomValue} </p> 
                </div>
            </div>
        </div>
    )
}

export default Higher
