import React, { Component } from 'react'

export default class SubMenuL3 extends Component {
    hideMenu = () => {
        let subL3 = document.querySelector(".lower-level-menu");
        subL3.classList.toggle("lower-level-menu-clicked");
   }
    render() {
        let cats = {
            "Reporting": ["Injury Reporting", "ASAP Reporting", "General ASAP Information"],
            "Agriculture and Customs" : ["I-9 Reporting", "General ASAP Information", "ASAP Reporting"],
            "Known Crewmembers" : [],
            "Product Safety" : ["Known Crewmembers", "Product Safety"]
        }
        let nameOfClass = `menu-slide-container ${this.props.cName}`;
        let categories = [];
        for (let [key, value] of Object.entries(cats)) {
            categories.push(key);
        }
            let listItems = categories.map((n, i) =>
        <li className="sub-level-item" key={i} >
          {n}
        </li>
        
      );
        return (
            <div className={nameOfClass}>
                <i className="fas fa-arrow-left fa-2x" onClick={this.hideMenu}></i>
                <ul>
                    <h4>{this.props.menuItem}</h4>
                    {listItems}
                </ul>
            </div>
        )
    }
}
