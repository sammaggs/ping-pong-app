import React from "react";

const Button = ({ buttonText, onClick, className } ) => {
    return (
        <button className={className} onClick={onClick}>{buttonText}</button>
    )
};

export default Button;