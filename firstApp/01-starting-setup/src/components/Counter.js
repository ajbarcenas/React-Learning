import React from 'react'

const Counter = (props) => {
    return (
        <div>
            <p>{props.currentCount}</p>
            <button onClick={props.onCount}>Increment Count</button>
        </div>
    )
}

export default Counter
