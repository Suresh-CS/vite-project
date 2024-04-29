import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    goodItems: ['Item 1', 'Item 2', 'Item 3'], // Sample items for the "Good" column
    badItems: ['Item A', 'Item B', 'Item C']    // Sample items for the "Bad" column
  };

  render() {
    return (
      <div className="App">
        <div className="Column">
          <h2>Good</h2>
          <ul>
            {this.state.goodItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="Column">
          <h2>Bad</h2>
          <ul>
            {this.state.badItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
