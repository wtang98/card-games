import './App.scss';
import Home from './pages/home/home';
import Higher from './pages/higher/higher';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const App = () => {
    const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    const deckOfCards = () =>{
        let deck = [];
        for (let index = 0; index < suits.length; index++) {
            for (let element = 0; element < values.length; element++) {
                let card = {Value: values[element], Suit: suits[index]}
                deck.push(card)
            }}
        return deck;
    }

	return (
		<Router>
			<div className="App">
				<Switch>

					<Route path="/higher">
						<Higher deckOfCards={deckOfCards}/>
					</Route>
					
					<Route path="/">
						<Home/>
					</Route>
					
				</Switch>
			</div>
		</Router>
	);
}

export default App;
