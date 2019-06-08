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
    this.setState({currentTopLvlMenuItem: e.innerText});
  }

  aria = (e) => {
    if (e.keyCode === 13) {
      this.openMenu();
    }
  }
  render() {
    return(

      <div className="App">
       {/* alaka airlines logo in Header */}
        <Header/>

        {/* hambuger icon */}
        <i className="fas fa-bars fa-2x" role="button" tabIndex="0" onKeyDown={this.aria} onClick={(e) => this.openMenu(e)}></i>

        {/* left side navigation menu */}
        <VertNavBar cName="main-nav" topLevel={this.state.topLevelCats} menuItem={this.updateTopLvlMenuItem} aria={this.aria}/>
      {/* the menu on the very buttom (level 3),hidden on init*/}
      <SubMenuL3 cName="lower-level-menu" menuItem={this.state.currentTopLvlMenuItem} aria={this.aria}/>

      {/* main focus on init, landing page slide  */}
      <div className="slides">
        <SubMenu cName="slide-top" closeMenu={this.resetMenuLayout} aria={this.aria}/>
      </div>
    </div>
      )
}
}
