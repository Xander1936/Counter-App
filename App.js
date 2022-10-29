import React, { useState } from 'react';
import './App.css';

function App() {
  //const myAge = 20;
  const [myAge, setMyAge] = useState(20);
  //console.log(myAge);
  return (
    <div className='counter'>
      <div className='app-title'>
        <h1 className='app-title'>Counter App</h1>
      </div>
      <h1 className='title' style={{ color: 'red' }}>
        My Age is : {myAge}.
      </h1>
      <div className='action'>
        <button className='btn' onClick={() => {setMyAge( myAge + 1)} }>
          Increase My Age +
        </button>
        <button className='btn' onClick={() => {setMyAge( myAge - 1)} }>
          Decrease My Age -
        </button>
      </div>
        
    </div>
  );
}

export default App;
//<></>