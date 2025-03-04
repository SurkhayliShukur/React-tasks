import React, { useState } from 'react'

import styles from './Count.module.css'

const Counts = () => {

    const initialState = { count: 0, text: "" }
    const { state, setState } = useState(initialState)


    const handleIncrement = () => {
        setState({ ...state, count: state.count + 1 })
    }

    const handleDecrement = () => {
        setState({ ...state, count: state.count - 1 < 0 ? 0 : state.count - 1 })
    }

    const handleText = (e) =>{
        setState({...state, text: e.target.value})
    }

    const handleAddition = () => {
        const value = parseInt(state.text, 10);
        if (!isNaN(value)) {
            setState({ count: state.count + value, text: '' });
        }
    };

    const handleSubtraction = () => {
        const value = parseInt(state.text, 10);
        if (!isNaN(value)) {
            setState({ count: state.count - value < 0 ? 0 : state.count - value, text: '' });
        }
    };

    const handleReset = () => {
        setState({ count: 0, text: '' });
    };

    return (
        <div className={styles.parent}>
        <div className={styles.btns}>
            <button onClick={handleDecrement} className={styles.btn}>-</button>
            <h2>{state.count}</h2>
            <button onClick={handleIncrement} className={styles.btn}>+</button>
        </div>
        <input
            type="number"
            className={styles.input}
            onChange={handleText}
            value={state.text}
        />
        <div className={styles.btns}>
            <button onClick={handleAddition} className={styles.btn}>Addition</button>
            <button onClick={handleSubtraction} className={styles.btn}>Subtract</button>
            <button onClick={handleReset} className={styles.btn}>Reset</button>
        </div>
    </div>
    )
}

export default Counts
