import React from 'react';
// import {socket} from '../Globals/socketio';

export default class ServerInfos extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td style={{color: this.props.usePassword ? 'red' : 'green'}}>{this.props.usePassword ? 'Yes' : 'No'}</td>
            </tr>
        );
    }
}