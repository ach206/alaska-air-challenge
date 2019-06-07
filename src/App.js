import React, { Component } from 'react'
import './App.css';
import Header from './comps/Header';
import SubMenu from './comps/SubMenu';

export default class App extends Component {
  openMenu = (e) => {
    console.log('it opened');
  }
  render() {
    return(

      <div className="App">
      <Header/>
      <div className="slides">

        <SubMenu cName="slide-top"/>
        <i className="fas fa-bars fa-2x" onClick={(e) => this.openMenu(e)}></i>
        <SubMenu cName="slide-middle"/>
        <SubMenu cName="slide-bottom"/>
      </div>
    </div>
      )
}
}
