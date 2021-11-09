import './App.scss';
import Home from './pages/home/home';
import Higher from './pages/higher/higher';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Switch>

					<Route path="/higher">
						<Higher/>
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
