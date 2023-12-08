
import './App.css';
import Guess from './components/Guess';
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
              <Guess className='guess' data-state="correct" word={"tests"} guess={"guess"} isGuessed={false}/>
            ))}
          </div>
        </div>
        <div className='row2'>
          <div className='board1'>
            {new Array(9).fill(0).map((_, i)=> (
              <Guess word={"tests"} guess={"guess"} isGuessed={false}/>
            ))}
          </div>
          <div className='board1'>
            {new Array(9).fill(0).map((_, i)=> (
              <Guess word={"tests"} guess={"guess"} isGuessed={false}/>
            ))}
          </div>
        </div>
      </div>
      <Qwerty/>

    </div>
  );
}

export default App;
