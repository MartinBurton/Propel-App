import { Component } from 'react';
import './App.css';
import 'tachyons';
import Navigation from '../Components/Navigation/Navigation';
import Time from '../Components/Time/Time';
import SignIn from '../Components/SignIn/SignIn';
import MenuItem from '../Components/MenuItem/MenuItem';

class App extends  Component {

  constructor() {
    super();
    this.state = {
      route: 'signIn'
    };
  }
  
  onRouteChange = (route) => {
    this.setState({ route: route })
  };

  displayRoute = ( newRoute ) => {
    switch(newRoute) {
      case 'signIn':
        return(
          <div className="container pa3">
            <SignIn onRouteChange={this.onRouteChange} />
          </div>
        );

      case 'mainMenu':
        return(
          <MenuItem />
        );

      default:
        return(
          <div>
            <h1>Error 404: Page not found</h1>
          </div>
        );
    }

  }

  render() {
    const { route } = this.state;
    return(
      <div>
        <nav style={{display: 'flex'}}>
          <Navigation />
          <Time />
        </nav>
        { this.displayRoute(route) }
      </div>
    );
  }
}

export default App;
