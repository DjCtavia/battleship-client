import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            window: {
                width: 1920,
                height: 1080,
            },
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({window: {width: window.innerWidth, height: window.innerHeight}});
    }

    generateGrid(gridSize) {
        const gridList = [];

        for (let iGrid = 0; iGrid < gridSize * gridSize; ++iGrid) {
            let digit = iGrid % 10;
            let cssClass;

            if ((iGrid  - digit) % 20) {
                cssClass = iGrid % 2 ? "container red" : "container blue";
            } else {
                cssClass = iGrid % 2 ? "container blue" : "container red";
            }
            gridList.push(
                <div className={cssClass}><h1>{iGrid}</h1></div>
            );
        }
        return gridList;
    }

    render() {
        return (
            <Router>
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
                    <h1>{this.state.window.width} x {this.state.window.height}</h1>
                    <div className="grid" style={{height: this.state.window.height, width: this.state.window.height}}>
                        {this.generateGrid(10)}
                    </div>
                </div>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);