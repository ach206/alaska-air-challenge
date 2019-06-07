import React, { Component } from 'react'
import logo from '../images/alaska-air-logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-logo">
                    <img src={logo} className="logo-image" alt="logo" />
                </div>
                
            </div>
        )
    }
}
