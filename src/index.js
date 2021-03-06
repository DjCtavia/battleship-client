import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
// Components
import Home from './Home/home';
import Game from './Game/game';
import Servers from './Servers/servers';
import About from './About/about';
import NoMatch from './NoMatch/index';
// CSS
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: true,
        };
        this.handleMenu = this.handleMenu.bind(this);
    }

    handleMenu(e) {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen,
        });
    }

    render() {
        return (
            <Router>
                <div id="app">
                    <aside className={this.state.isMenuOpen ? "nav-open" : ""}>
                        <ul>
                            <li>
                                <Link to="/" className="active">Home</Link>
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
                    <button className={"nav-handler"} onClick={this.handleMenu}>
                        {this.state.isMenuOpen ? "<<" : ">>"}
                    </button>
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