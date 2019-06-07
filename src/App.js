import React, { Component } from 'react'
import './App.css';
import Header from './comps/Header';
import SubMenu from './comps/SubMenu';
import VertNavBar from './comps/VertNavBar';

export default class App extends Component {
  state = {
    mainSlideClicked: false,
    topLevelCats: 
    ["SCHEDULING & BIDDING",
     "SAFETY", 
     "TRAINING", 
     "ADMINISTRATION", 
     "HOTELS", 
     "MY BASE"],
     catsLevel2: [""],
     catsLevel3: [""],

  }
  openMenu = (e) => {
    let slides = document.querySelector('.slides');
    let vertNav = document.querySelector('.nav-container');
    let topSlide = document.querySelector('.slide-top');
    if (this.state.mainSlideClicked === false){
      this.setState({mainSlideClicked: true});
      // vertNav.style.position="relative";
      // vertNav.style.left="auto";
    } else {
      this.setState({mainSlideClicked: false});
      // vertNav.style.position="absolute";
      // vertNav.style.left="-999px";
    }
  slides.classList.toggle("slides-clicked");
  topSlide.classList.toggle("slide-top-clicked");
  vertNav.classList.toggle("nav-container-visible");
    console.log('it opened');
  }
  render() {
    return(

      <div className="App">
      <Header/>
        <i className="fas fa-bars fa-2x" onClick={(e) => this.openMenu(e)}></i>
        <VertNavBar cName="main-nav" topLevel={this.state.topLevelCats}/>
      <div className="slides">

        <SubMenu cName="slide-top"/>
        <SubMenu cName="slide-bottom"/>
      </div>
    </div>
      )
}
}
