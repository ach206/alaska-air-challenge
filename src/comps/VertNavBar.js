import React, { Component } from 'react'

export default class VertNavBar extends Component {
   openSubMenu = (e) => {
        this.props.menuItem(e);
        let subL3 = document.querySelector(".lower-level-menu");
        subL3.classList.toggle("lower-level-menu-clicked");
   }
    render() {
        let nameOfClass = `nav-container ${this.props.cName}`;
        let topLevelItems = this.props.topLevel;
        let listItems = topLevelItems.map((n, i) =>
          <li className="top-level-item" key={i} 
          onClick={(e) => this.openSubMenu(e.target)}>
            {n}
          </li>
        );
        return (
            <div className={nameOfClass}>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}
