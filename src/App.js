import './App.css';
import Scroll from './Scroll';

function App() {

  
  return (
    <div className="App">
      <Scroll/>
      <div className='flex justify-center items-center flex-col  page'>
        <h1 className='text-8xl text-center dm-serif-display-regular '>Principles of Design</h1>
      </div>

      <div className='page'>
        <h1>Contrast</h1>
        <button>Button??</button>
      </div>

      <div className='page'>
        Emphasis
      </div>

      <div className='page'>
        Movement
      </div>

      <div className='page'>
        Balance
      </div>

      <div className='page'>
        Repetition
      </div>

      <div className='page'>
        Rhythm
      </div>

      <div className='page'>
        Unity
      </div>

      <div className='page'>
        Proportion
      </div>

      <div className='page'>
        Pattern
      </div>




       <div style={{ height: "200vh" }}></div>
    </div>
  );
}

export default App;
