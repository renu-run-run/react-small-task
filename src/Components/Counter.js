import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState();
     
    return(
        <>
          <button onClick={() => setCounter(counter + 1)}>increment</button>
          {counter}
          <button onClick={()=> setCounter(counter - 1)}>decrement</button>
        </>
    )

}
    export default Counter