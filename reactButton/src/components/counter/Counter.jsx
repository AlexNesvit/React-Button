import React from 'react'
import MyButtonPlus from './myButtonPlus/MyButtonPlus'
import MyButtonMoins from './myButtonMoins/MyButtonMoins'

const Counter = ({ count, setCount }) => {
    return (
        <>
            <h1>Counter</h1>
            <div className="card">
                <MyButtonPlus count={count} setCount={setCount} />
                <MyButtonMoins count={count} setCount={setCount} />
            </div>
        </>
    )
}

export default Counter