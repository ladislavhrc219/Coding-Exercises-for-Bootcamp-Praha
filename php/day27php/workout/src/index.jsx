import React from 'react';
import ReactDOM from 'react-dom';
import List from './List/List.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <List
          url="http://www.cbp-exercises.test:8080/php/day27php/workout/mysqltest.php"
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
