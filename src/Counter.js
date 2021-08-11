import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Counter = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const increase = () => {
        setCounter(counter + 1);
    };

    const decrease = () => {
        setCounter(counter - 1);
    };


    return (
        <>
            <h1> Counter App </h1>

            <button onClick={increase}> Increase </button>

            <h2> {counter} </h2>

            <button onClick={decrease}> Decrease </button>
        </>
    )
}

Counter.propTypes = {
    value: PropTypes.number
}

export default Counter;
