import React, { Component } from 'react'
import './App.css';
import Header from './comps/Header';
import SubMenu from './comps/SubMenu';
import VertNavBar from './comps/VertNavBar';
import SubMenuL3 from './comps/SubMenuL3';


export default class App extends Component {
  state = {
    hamburgerClicked: false,
    topLevelCats: 
    ["SCHEDULING & BIDDING",
     "SAFETY", 
     "TRAINING", 
     "ADMINISTRATION", 
     "HOTELS", 
     "MY BASE"],
    resetLayout: false,
    currentTopLvlMenuItem: "",
  }

  openMenu = (e) => {
    let slides = document.querySelector('.slides');
    let vertNav = document.querySelector('.nav-container');
    let topSlide = document.querySelector('.slide-top');
    if (this.state.hamburgerClicked === false){
      this.setState({hamburgerClicked: true});
    } else {
      this.setState({hamburgerClicked: false});
    }
    slides.classList.toggle("slides-clicked");
    topSlide.classList.toggle("slide-top-clicked");
    vertNav.classList.toggle("nav-container-visible");
    
    if (this.state.resetLayout === true && this.state.hamburgerClicked === true) {
      slides.classList.toggle("slides-clicked");
      topSlide.classList.toggle("slide-top-clicked");
      vertNav.classList.toggle("nav-container-visible");
    }
  }

  resetMenuLayout = () => {
    this.setState({resetLayout: true});
    this.openMenu();
  }

  updateTopLvlMenuItem = (e) => {
    this.setState({currentTopLvlMenuItem: e.innerHTML});
  }
  render() {
    return(

      <div className="App">
      <Header/>
      
        <i className="fas fa-bars fa-2x" onClick={(e) => this.openMenu(e)}></i>

        <VertNavBar cName="main-nav" topLevel={this.state.topLevelCats} menuItem={this.updateTopLvlMenuItem}/>

      <SubMenuL3 cName="lower-level-menu" menuItem={this.state.currentTopLvlMenuItem}/>

      <div className="slides">
        <SubMenu cName="slide-top" closeMenu={this.resetMenuLayout}/>
      </div>
    </div>
      )
}
}
