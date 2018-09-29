import React, { Component } from 'react';

import Navbar from './Components/NavigationBar/Navbar'
import SideBar from './Components/SideBar/SideBar'
import Backdrop from './Components/BackDrop/BackDrop'
import Profile from './Components/Profile/Profile'
import SocialMediaBar from './Components/SocialMediaBar/SocialMediaBar'
import Particles from 'react-particles-js';
import './App.css';

const particlesProp = {
                        particles: {                          
                          number: {
                            value: 50,
                            density: {
                              enable:true,
                              value_area: 600
                            }            					
                          }
                        }
                      }

class App extends Component {
  state = {
    sideBarOpen: false
  };
   
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideBarOpen: false});
  };

  render() {
    let sideBar;
    let backdrop;
    
    if (this.state.sideBarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div style={{height: '100%'}}>
        <Particles className='particles'
          params={particlesProp}
        />
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideBar show={this.state.sideBarOpen} />
          {backdrop}
        
        <main style={{marginTop: '64px'}}>
        <Profile />
        <SocialMediaBar />
        <p></p>
        
        </main>
      </div>
    );
  }
}

export default App;
