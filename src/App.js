import React, { useState } from 'react';

const App = () => {
  const [count, setCount]=useState(0);

  const handleCountUp = () =>{
    setCount(count+1)
  }
  const handleCountDown = () =>{
    setCount(count-1)
  }
  const handleCountReset = () =>{
    setCount(0)
  }
  const handleCountReverse = () =>{
    setCount((pre) =>{
      return pre*(-1)
    })
  }
  const handleCountDouble = () =>{
    setCount(count*2)
  }
  const handleCountThreeDiv = () =>{
    setCount( pre => (pre%3===0 ? pre/3 : pre))
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCountUp}>up</button>
      <button onClick={handleCountDown}>down</button>
      <button onClick={handleCountReset}>Reset</button>
      <button onClick={handleCountReverse}>Reverse</button>
      <button onClick={handleCountDouble}>double</button>
      <button onClick={handleCountThreeDiv}>divThree</button>
    </div>
  );
}

export default App;
