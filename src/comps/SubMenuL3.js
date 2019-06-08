import React, { Component } from 'react'

//all categories and their associative sub-categories
let cats = {
    "Reporting": ["Injury Reporting", "ASAP Reporting", "General ASAP Information"],
    "Agriculture and Customs" : ["I-9 Reporting", "General ASAP Information", "ASAP Reporting"],
    "Known Crewmembers" : [],
    "Product Safety" : ["Known Crewmembers", "Product Safety"]
}
export default class SubMenuL3 extends Component {

    // will trigger css animation to move element off screen
    hideMenu = () => {
        let subL3 = document.querySelector(".lower-level-menu");
        subL3.classList.toggle("lower-level-menu-clicked");
   }
//    all sub-categories
   getListItems = (name, i) => {
      return cats[name].map((el, index) => 
           <span key={index} 
           className="list-item-span">
              {el}
            </span>
        )
   }
//    function to expand/display the assosciative sub-menu for the category that's selected
   expandCategory = (e) => {
       e.bubbles = true;
    //    e.preventDefault();
    //    let targetedSpan = document.querySelector(`.item-container${e}`);
       console.log(e.currentTarget);
       
       //    targetedSpan.classList.toggle("display-span");
    //    console.log(`Targeted span ${targetedSpan.children[1].classList}`);
    //    console.log(`Targeted span ${targetedSpan}`);
   }
   aria = (e) => {
    if (e.keyCode === 13) {
      this.expandCategory(e);
    }
  }
    render() {
        let nameOfClass = `menu-slide-container ${this.props.cName}`;
    /* iterates through the categories and their sub-menu items
    then places the obj key instead a new array */
        let categories = [];
        for (let [key] of Object.entries(cats)) {
            categories.push(key);
        };
// grabs the Title of each category and appends children elements that list sub-categories
        let listItems = categories.map((n, i) => 
            <div role="button" tabIndex="0" onKeyDown={this.aria}  key={i} className="item-container" id={`id${i}`}
            onClick={(e) => this.expandCategory(e)}>
                <div className="sub-level-item">
                    <p>{n}</p>
                    <i className="fas fa-sort-down hidden-icon fa-lg"></i>
                </div>
                <div className="list-items">
                    {this.getListItems(n, i)}
                </div>
            </div>
        );
        return (
            <div className={nameOfClass} tabIndex="0">
                <i className="fas fa-arrow-left fa-2x" onClick={this.hideMenu}></i>
                    <h4>{this.props.menuItem}</h4>
                    {listItems}
            </div>
        )
    }
}
