import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/App.css';
import '../Styles/Hover.css';
import pingPongIcon from '../images/table-tennis.png';

const Header = () => {
    return (
        <header>
            <div>
                <img className="header-icon hvr-bob"src={pingPongIcon} />
            </div>
        </header>
    )
}

export default Header;