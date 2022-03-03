import React from "react";
import classNames from "classnames";
import propTypes from 'prop-types';


function Button({onClick, className, outline, children}) {
    return (
       
          <button 
            className={classNames("button", className, {"button--outline": outline,})} 
            onClick={onClick}>
                {children}
          </button>
       
        )
}

Button.propTypes = {
    onClick: propTypes.func,
}

export default Button;