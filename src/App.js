
import './App.css';
import Guess from './components/Guess';
import Guess2 from './components/Guess2';
import Guess3 from './components/Guess3';
import Guess4 from './components/Guess4';
import Qwerty from './components/Qwerty';
import PuzzleStore from './stores/PuzzleStore';

function App() {
  return (
    <div className="App" >
      <h1 className='title'>Skeedle</h1>
      <div className='game'>
        <div className='row1'>
          <div className='board1'>
            {new Array(9).fill(0).map((_, i)=> (
              <Guess word={"tests"} guess={"guess"} isGuessed={true}/>
            ))}
          </div>
          <div className='board1'>
            {new Array(9).fill(0).map((_, i)=> (
              <Guess2 word2={"tests"} guess={"guess"} isGuessed={true}/>
            ))}
          </div>
        </div>
        <div className='row2'>
          <div className='board1'>
            {new Array(9).fill(0).map((_, i)=> (
              <Guess3 word3={"tests"} guess={"guess"} isGuessed={false}/>
            ))}
          </div>
          <div className='board1'>
            {new Array(9).fill(0).map((_, i)=> (
              <Guess4 word4={"tests"} guess={"guess"} isGuessed={false}/>
            ))}
          </div>
        </div>
      </div>
      <Qwerty/>

    </div>
  );
}

export default App;
