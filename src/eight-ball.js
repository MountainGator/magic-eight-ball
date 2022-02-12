import './eight-ball.css';
import { useState } from 'react';


const EightBall = ({ answers }) => {
    const [msg, setMsg] = useState('Think of a Question');
    const [clr, setClr] = useState('black');
    

    const changeMsg = () => {
        const randomNo = Math.ceil((Math.random() * answers.length) - 1);
        const { msg, color } = answers[randomNo];
        setMsg(msg);
        setClr(color);
    }
    
    return (
        <div className="eightBall" style={{ backgroundColor: `${clr}` }} onClick={changeMsg}>
            <h2 className="eightBall-h2">{msg}</h2>
        </div>
    )
}

export default EightBall;