import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
// Components
import Home from './Home/index';
import Game from './Game/index';
import Servers from './Servers/index';
import About from './About/index';
import NoMatch from './NoMatch/index';
// CSS
import './index.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <aside>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/servers">Servers</Link>
                            </li>
                            <li>
                                <Link to="/game">Game</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </aside>
                    <Switch>
                        <Route path="/servers">
                            <Servers />
                        </Route>
                        <Route path="/game">
                            <Game />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);