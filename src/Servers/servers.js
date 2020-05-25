import React from 'react';
import {socket} from '../Globals/socketio';
// CSS
import './servers.css';
// components
import ServerInfos from './serverinfos';

export default class Servers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servers: [],
            serverCreation: {
                name: '',
                password: '',
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
        let newServerCreationObject = Object.assign(this.state.serverCreation, {password: e.target.value});
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
        socket.emit('CreateServer', this.state.serverCreation);
    }

    AddServer({id, name, usePassword})
    {
        console.log("serverName:", name, "usePassword:", usePassword);
        const server = <ServerInfos key={id} name={name} usePassword={usePassword} />;
        this.setState(prevState => ({
            servers: [
                ...prevState.servers,
                server
            ]
        }));
    }

    componentDidMount()
    {
        socket.on('GetServersList', data => { data.forEach(server => this.AddServer(server)); console.log(data); });
        socket.emit('InitServerList');
    }

    componentWillUnmount() {
        socket.off('GetServersList');
    }

    render() {
        return (
            <main>
                <h1>Servers page is under construction</h1>
                <input type="text" onChange={this.handleServerInCreationName}></input>
                <input type="password" onChange={this.handleServerInCreationPassword}></input>
                <input type="number" onChange={this.handleServerInCreationBoardSize}></input>
                <button onClick={this.handleCreateServer}>Create</button>

                <table>
                    <thead>
                        <tr>
                            <th>Server name</th>
                            <th>Use password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.servers}
                    </tbody>
                </table>
            </main>
        );
    }
}