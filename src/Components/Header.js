import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/App.css';

const Header = () => {
    return (
        <header>
            <div>
                <Link to="/">
                <h1>Everyone  <span aria-label="Heart" role="img">❤️'s Ping Pong</span></h1>
                </Link>
            </div>
        </header>
    )
}

export default Header;