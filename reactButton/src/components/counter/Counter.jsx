import React from 'react'
import MyButtonPlus from '../myButtonPlus/MyButtonPlus'
import MyButtonMoins from '../myButtonMoins/MyButtonMoins'
import Reinitialiser from '../reinitialiser/Reinitialiser'

const Counter = ({ count, setCount }) => {
    return (
        <>
            <div className="card">
                <MyButtonMoins count={count} setCount={setCount} />
                <MyButtonPlus count={count} setCount={setCount} />
            </div>
            <div className="card">
                <Reinitialiser count={count} setCount={setCount} />
            </div>
        </>
    )
}

export default Counter