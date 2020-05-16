import React from 'react';
import ReactDOM from 'react-dom';

export default class Board extends React.Component {
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
        console.log(ReactDOM.findDOMNode(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        const node = ReactDOM.findDOMNode(this);
        this.setState({window: {width: node.offsetWidth, height: node.offsetHeight}});
    }

    generateGrid(gridSize) {
        const gridList = [];

        for (let iGrid = 0; iGrid < gridSize * gridSize; ++iGrid) {
            gridList.push(
                <div
                    key={iGrid}
                    className="container"
                    style={this.generateStyles(gridSize, iGrid)}
                >
                    <h1 >
                        {iGrid}
                    </h1>
                </div>
            );
        }
        return gridList;
    }

    generateStyles(gridSize, iGrid) {
        let style = {};

        if (iGrid !== 0 && !((iGrid + 1) % gridSize)) {
            style.borderRightStyle = 'none';
        }
        if (iGrid >= (gridSize * gridSize - gridSize)) {
            style.borderBottomStyle = 'none';
        }
        return style;
    }

    render () {
        return (
            <div style={{height: '80vh'}}>
                <h1>{this.state.window.width} x {this.state.window.height}</h1>
                <div
                    className="grid"
                    style={{
                        border: 'solid 1px black',
                        display: 'grid',
                        gridTemplateColumns: `repeat(${this.props.gridSize || 10}, 1fr)`,
                        gridTemplateRows: `repeat(${this.props.gridSize || 10}, 1fr)`,
                        height: this.state.window.height * (this.props.heightSizePercents || 1),
                        width: this.state.window.height * (this.props.heightSizePercents || 1),
                        margin: '0 auto',
                    }}
                    >
                    {this.generateGrid(this.props.gridSize || 10)}
                </div>
            </div>
        );
    }
}