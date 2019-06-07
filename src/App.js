import React from 'react';
import './App.css';
import Header from './comps/Header';
import SubMenu from './comps/SubMenu';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="slides">

        <SubMenu cName="slide-top"/>
        <SubMenu cName="slide-middle"/>
        <SubMenu cName="slide-bottom"/>
      </div>
    </div>
  );
}

export default App;
