import React from "react";

const Button = ({ buttonText, onClick, className, disabled } ) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>{buttonText}</button>
    )
};

export default Button;