import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import Photo from './Photo.jsx';
import PhotoList from './PhotoList';
import mockData from '../configs/mockData';
import PhotoUpdateBar from './PhotoUpdateBar'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPic : mockData[0],
      picList : mockData,
      currentRating : mockData[0].rating
    }

    this.onPhotoClicked = this.onPhotoClicked.bind(this);
    this.onRatingClicked = this.onRatingClicked.bind(this);
  }

  onPhotoClicked (clickedPicData) {
    this.setState ({
      currentPic : clickedPicData,
      currentRating : clickedPicData.rating
    })
  };

  onRatingClicked (e) {
    var id = e.target.value;
    this.setState ({
      currentRating : id
    })
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome sto React</h2>
        </div>

        <div className="PhotoUpdateBar-position">
          <PhotoUpdateBar />
        </div>


        <div className="Photo-position">
          <Photo pic={this.state.currentPic} rating={this.state.currentRating} onRatingClicked={this.onRatingClicked}/>
        </div>

        <div className="PhotoList-position">
          <PhotoList picList={this.state.picList} cb={this.onPhotoClicked}/>
        </div>

      </div>
    );
  }
}
export default App;
