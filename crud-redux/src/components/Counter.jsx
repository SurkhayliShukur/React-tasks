import React,{useState} from "react";
import { increment, decrement,addition,subtraction,resetCount } from "../features/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {

  const dispatch = useDispatch();

  const valueCounter = useSelector((state) => state.counter.value);

  const [amount,setAmount] = useState(0)

  const handleAddValue = (e) => {
    setAmount(e.target.value)
  }

  const addNum = () => {
    dispatch(addition(Number(amount)))
  }
  const subNum = () => {
    dispatch(subtraction(Number(amount)))
    setAmount(0)
  }

  return (
    <>
      <div className="parent">
        <div className="btns">
          <button className="btn" onClick={() => dispatch(decrement())}>
            -
          </button>
          <h2>{valueCounter}</h2>
          <button className="btn" onClick={() => dispatch(increment())}>
            +
          </button>
        </div>

        <div>
          <input
            type="number"
            className="input"
            placeholder="Add Value"
            value={amount}
            onChange={handleAddValue}
          />
        </div>

        <div className="btns">
          <button className="btn" onClick={subNum }>
            Subtract
          </button>
          <button className="btn" onClick={addNum}>
            Addition
          </button>
        </div>
        <button className="btn reset" onClick={()=> dispatch(resetCount())}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
