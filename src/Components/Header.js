import React from 'react';
import '../Styles/App.css';
import '../Styles/Hover.css';
import '../Styles/Header.css'
import pingPongIcon from '../images/table-tennis.png';


const Header = () => {
    return (
        <header>
            <div>
                <img alt="table tennis logo" className="header-icon hvr-bob"src={pingPongIcon} />
            </div>
        </header>
    )
}

export default Header;