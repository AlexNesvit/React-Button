import React from "react";

function Reinitialiser({ count, setCount }) {
    return (
        <button onClick={() => setCount(0)} >
        Reinitialiser
        </button>
    );
}   

export default Reinitialiser