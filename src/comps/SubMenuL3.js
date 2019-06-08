import React, { Component } from 'react'

let cats = {
    "Reporting": ["Injury Reporting", "ASAP Reporting", "General ASAP Information"],
    "Agriculture and Customs" : ["I-9 Reporting", "General ASAP Information", "ASAP Reporting"],
    "Known Crewmembers" : [],
    "Product Safety" : ["Known Crewmembers", "Product Safety"]
}
export default class SubMenuL3 extends Component {
    hideMenu = () => {
        let subL3 = document.querySelector(".lower-level-menu");
        subL3.classList.toggle("lower-level-menu-clicked");
   }
   getListItems = (name, i) => {
      return cats[name].map((el, index) => 
           <span key={index}>
              {el}
            </span>
        )
   }
    render() {
        // let cats = {
        //     "Reporting": ["Injury Reporting", "ASAP Reporting", "General ASAP Information"],
        //     "Agriculture and Customs" : ["I-9 Reporting", "General ASAP Information", "ASAP Reporting"],
        //     "Known Crewmembers" : [],
        //     "Product Safety" : ["Known Crewmembers", "Product Safety"]
        // }
        let nameOfClass = `menu-slide-container ${this.props.cName}`;
        let categories = [];
        for (let [key] of Object.entries(cats)) {
            categories.push(key);
        };

        let listItems = categories.map((n, i) =>
            <div key={i}>
               <p>{n}</p>
               <i className="fas fa-sort-down hidden-icon fa-lg"></i>
                <div className="list-items">
                    {this.getListItems(n, i)}
                </div>
            </div>
        );
        return (
            <div className={nameOfClass}>
                <i className="fas fa-arrow-left fa-2x" onClick={this.hideMenu}></i>
                    <h4>{this.props.menuItem}</h4>
                    {listItems}
            </div>
        )
    }
}
