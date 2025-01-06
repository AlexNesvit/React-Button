import React from 'react';

function MyButtonMoins({ count, setCount }) {
    return (
        <button onClick={() => setCount(count - 1)}>
        - Decrement
        </button>
    );
}

export default MyButtonMoins;