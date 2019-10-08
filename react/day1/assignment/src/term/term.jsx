import React from 'react';
import './index.scss';




export default class Term extends React.Component {
    render() {
      return (
        <div className="term">
            { this.props.term } 
            
          <div className="quote">
            {this.props.quote}
          </div>
        </div>
      );
    }
  }
  