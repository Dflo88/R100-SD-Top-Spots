import TopSpot from './topspot';
import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    }
  }

  componentWillMount(){
    Axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
        <div className='container-fluid'>
          <div className='row'>
            <div id='mainBox' className='col-lg-8'>
              <h3>San Diego Top Spots</h3>
              <p>A list of the top 30 places to see in San Diego, California</p>
            </div>
          </div>
        </div>
        {/* <pre>
              { JSON.stringify(this.state.topspots, null, 2) }
        </pre> */}
        {
        this.state.topspots.map(topspot => (
          <TopSpot
            key={topspot.id}
            name={topspot.name}
            description={topspot.description}
            location={topspot.location} 
          />
        ))
      }
      </div>
    );
  }
}

export default App;
