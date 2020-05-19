import React from 'react';
import {IoContext} from '../Globals/socketio';

export default class Servers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serverCreation: {
                name: '',
                pwd: '',
                boardSize: 10,
            },
        };
        this.handleServerInCreationName = this.handleServerInCreationName.bind(this);
        this.handleServerInCreationPassword = this.handleServerInCreationPassword.bind(this);
        this.handleServerInCreationBoardSize = this.handleServerInCreationBoardSize.bind(this);
        this.handleCreateServer = this.handleCreateServer.bind(this);
    }

    handleServerInCreationName(e) {
        let newServerCreationObject = Object.assign(this.state.serverCreation, {name: e.target.value});
        this.setState({serverCreation: newServerCreationObject});
        console.log(this.state.serverCreation);
    }

    handleServerInCreationPassword(e) {
        let newServerCreationObject = Object.assign(this.state.serverCreation, {pwd: e.target.value});
        this.setState({serverCreation: newServerCreationObject});
    }

    handleServerInCreationBoardSize(e) {
        if (!isNaN(e.target.value)) {
            let newServerCreationObject = Object.assign(this.state.serverCreation, {boardSize: Number(e.target.value)});
            this.setState({serverCreation: newServerCreationObject});
        } else {
            let newServerCreationObject = Object.assign(this.state.serverCreation, {boardSize: 10});
            this.setState({serverCreation: newServerCreationObject});
        }
    }

    handleCreateServer(e) {
        IoContext.emit('CreateServer', this.state.serverCreation);
    }

    render () {
        return (
            <main>
                <h1>Servers page is under construction</h1>
                <input type="text" onChange={this.handleServerInCreationName}></input>
                <input type="password" onChange={this.handleServerInCreationPassword}></input>
                <input type="number" onChange={this.handleServerInCreationBoardSize}></input>
                <button onClick={this.handleCreateServer}>Create</button>
            </main>
        );
    }
}