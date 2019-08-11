import React from 'react';
import './TopBar.css';

class TopBar extends React.Component {
    render() {
        return (
            <div id="topbar">
                <div className="navbar">
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>

        )
    }
}

export default TopBar;
