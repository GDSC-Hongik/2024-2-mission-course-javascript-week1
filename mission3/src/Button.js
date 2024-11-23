import React from 'react';

function Button() {
    const handleClick = () => {
        alert('Hello!');
    };

    return (
        <button onClick={handleClick}>
            Click
        </button>
    );
}

export default Button;