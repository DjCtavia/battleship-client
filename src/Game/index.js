import React from 'react';
// Components
import Board from './Board/index';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardSize: 100 / 100,
            gridSize: 10,
        }
        this.handleChangeBoardSize = this.handleChangeBoardSize.bind(this);
        this.handleChangeGridSize = this.handleChangeGridSize.bind(this);
    }

    handleChangeBoardSize(e) {
        this.setState({
            boardSize: e.target.value / 100,
        });
    }

    handleChangeGridSize(e) {
        this.setState({
            gridSize: e.target.value,
        });
    }

    render () {
        return (
            <main>
                <input type='range' name='boardSize' value={this.state.boardSize * 100} min={1} max={100} maxLength={3} onChange={this.handleChangeBoardSize} />
                <input type='range' name='gridSize' value={this.state.gridSize} min={1} max={10} maxLength={2} onChange={this.handleChangeGridSize} />
                <h1>Game page is under construction</h1>
                <Board heightSizePercents={this.state.boardSize} gridSize={this.state.gridSize}/>
            </main>
        );
    }
}