import React, { Component } from 'react'

export default class VertNavBar extends Component {
   openSubMenu = (e) => {
        this.props.menuItem(e);
        let subL3 = document.querySelector(".lower-level-menu");
        subL3.classList.toggle("lower-level-menu-clicked");
   }
   aria = (e) => {
    if (e.keyCode === 13) {
      this.openSubMenu(e);
    }
  }
    render() {  
        let nameOfClass = `nav-container ${this.props.cName}`;
        let topLevelItems = this.props.topLevel;
        /* builds a list of top level menu / navigational items */
        let listItems = topLevelItems.map((n, i) =>
          <li 
          className="top-level-item" 
          role="button" 
          tabIndex="0" 
          onKeyDown={this.aria} 
          key={i} 
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
