import {React, useState} from 'react'
import ReactDOM, { render } from 'react-dom';
import './higher.scss'
import Nav from '../../components/nav/nav'
import { Button } from '@material-ui/core'

const Higher = (props) => {

    const {deckOfCards} = props
    const [randomValue, setRandomValue] = useState(); 
    // const 
    let copy = [...deckOfCards()];
    
    
    let random = 52;
    const dealtCard = Math.floor(Math.random()*random);
    const getRandomCard = () => {
        if(random>=0){
            random-=1;
            console.log(random);
            return copy[dealtCard];
        }
    }
    const removeCard = () => {
        copy[dealtCard] = copy[copy.length-1];
        copy.pop();
        console.log(copy);
        return copy;
    }
    const callBoth = () => {
        const randomCard = getRandomCard();
        console.log(randomCard.Value);
        setRandomValue(randomCard.Value); 
        removeCard();
    }

    // callBoth();

    return (
        <div className="higher">
            <Nav title="Higher or Lower" goBack={true}/>
            <div className="higher__content">
                <Button variant="contained" onClick={removeCard}>fat mf</Button>
                <div id="higherValue">
                    <p>{randomValue} </p> 
                </div>
            </div>
        </div>
    )
}

export default Higher
