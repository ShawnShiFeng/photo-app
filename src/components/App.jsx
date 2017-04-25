import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import Photo from './Photo.jsx';
import PhotoList from './PhotoList';
import mockData from '../configs/mockData';


class App extends Component {
  constructor(props) {
    super(props);
    console.log(mockData);

    this.state = {
      currentPic : mockData[0],
      picList : mockData
    }
    console.log(mockData[0]);
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome sto React</h2>
        </div>

        <div className="Photo-position">
          <Photo pic={this.state.currentPic} />
        </div>

        <div className="PhotoList-position">
          <PhotoList picList={this.state.picList}/>
        </div>

      </div>
    );
  }
}
export default App;
