import React from 'react';
import './App.css';

import PlayersCards from './Components/PlayersCards'
import NavBar from './Components/NavBar'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data:[]
    }
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/players")
    .then( res => res.json())
    .then( names => this.setState({ data: names })
    )
    .catch( err => console.log('error'))
  }
  render() {
    return (
      <div className = "Container">
        <div className = "NavBar">
          <NavBar />
        </div>
        <div className = "Card">
          <h1>{console.log(this.state.name)}</h1>
            {this.state.data.map(players => <PlayersCards players = {players}/>)}
        </div>
      </div>
    );
  }
}

export default App;
