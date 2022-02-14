import './eight-ball.css';
import { useState } from 'react';

const initialState = {
   words: "Think of a Question",
    bkg: "black"
};

const EightBall = ({ answers }) => {
    const { words, bkg } = initialState;
    
    const [msg, setMsg] = useState(words);
    const [clr, setClr] = useState(bkg);
    

    const changeMsg = () => {
        const randomNo = Math.ceil((Math.random() * answers.length) - 1);
        const { msg, color } = answers[randomNo];
        setMsg(msg);
        setClr(color);
    }

    const resetBall = (e) => {
        e.preventDefault();
        setMsg(words);
        setClr(bkg);
    }
    
    return (
        <div className="eightBall" style={{ backgroundColor: `${clr}` }}>
            <h2 className="eightBall-h2" onClick={changeMsg}>{msg}</h2>
            <button className="eightBall-btn" onClick={resetBall}>Reset</button>
        </div>
    )
}

export default EightBall;