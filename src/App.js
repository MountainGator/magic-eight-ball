import EightBall from './eight-ball';
import Answers from './answers';
import './App.css';

function App() {
  return (
    <div className='container'>
      <EightBall answers={Answers} />
    </div>
  );
}

export default App;
