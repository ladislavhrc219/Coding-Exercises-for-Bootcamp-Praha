import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="game">
                <img src={this.props.image_url} alt={this.props.name }/>
                <h3> Description: </h3>
                <p> {this.props.description} </p>
                <h3>Rating:</h3>{this.props.rating}
                <h3>Released at:</h3>{this.props.released_at}
            </div>
        );
    }
}