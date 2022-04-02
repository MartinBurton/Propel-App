import { Component } from 'react';
import './App.css';
import 'tachyons';
import Navigation from '../Components/Navigation/Navigation';
import Time from '../Components/Time/Time';
import SignIn from '../Components/SignIn/SignIn';

class App extends  Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return(
      <div>
        <nav style={{display: 'flex'}}>
          <Navigation />
          <Time />
        </nav>
        <div className="container pa3">
          <SignIn />
        </div>
      </div>
    );
  }
}

export default App;
