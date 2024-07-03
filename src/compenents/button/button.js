import React from 'react';

function Button({label}){
    const click = () => {
        alert(`A label desse botão é ${label}`);
    }

    return(
        <button onClick={click}> 
            {label}
        </button>
    )
}

export default Button;