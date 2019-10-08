import React from 'react';
import './term.scss';

export default class Term extends React.Component {
  render() {
    return (
       <>     
        <div className="mainterm">
            { this.props.mainterm } 
        </div>
        <div className="quote">
            {this.props.quote}
        </div>
      </>
    );
  }
}