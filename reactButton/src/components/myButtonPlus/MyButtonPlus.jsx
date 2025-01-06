import React from 'react';

function MyButtonPlus({ count, setCount }) {
    return (
        <button onClick={() => setCount(count + 1)} >
        + Increment
        </button>
    );
}

export default MyButtonPlus;