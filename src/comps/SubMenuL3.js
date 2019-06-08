import React, { Component } from 'react'

export default class SubMenuL3 extends Component {
    hideMenu = () => {
        let subL3 = document.querySelector(".lower-level-menu");
        subL3.classList.toggle("lower-level-menu-clicked");
   }
    render() {
        let nameOfClass = `menu-slide-container ${this.props.cName}`;
        let categories = ["Reporting", "Agriculture and Customs", "Known Crewmembers", "Product Safety"];
        let listItems = categories.map((n, i) =>
        <li className="top-level-item" key={i} >
          {n}
        </li>
        // onClick={(e) => this.openSubMenu(e.target)}
      );
        return (
            <div className={nameOfClass}>
                <i className="fas fa-arrow-left fa-2x" onClick={this.hideMenu}></i>
                <ul>
                    <h4>Grab Title From evt</h4>
                    {listItems}
                </ul>
            </div>
        )
    }
}
