import React from 'react';

function MyButtonMoins({ count, setCount }) {
    return (
        <button 
        onClick={() => {
            if (count > 0) setCount(count - 1);
        }}
        >
        - Decrement
        </button>
    );
}

export default MyButtonMoins;