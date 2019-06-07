import React, { Component } from 'react'

export default class VertNavBar extends Component {
    render() {
        let nameOfClass = `nav-container ${this.props.cName}`;
        let topLevelItems = this.props.topLevel;
        let listItems = topLevelItems.map((n, i) =>
          <li className="top-level-item" key={i}>
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
