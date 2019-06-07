import React from 'react';
import './App.css';
import Header from './comps/Header';
import SubMenu from './comps/SubMenu';

function openMenu(e) {
  console.log('it opened');
}
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="slides">

        <SubMenu cName="slide-top"/>
        <i className="fas fa-bars fa-2x" onClick={openMenu}></i>
        <SubMenu cName="slide-middle"/>
        <SubMenu cName="slide-bottom"/>
      </div>
    </div>
  );
}

export default App;
