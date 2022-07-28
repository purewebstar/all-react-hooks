import React, {useState, useRef, useEffect} from 'react';      
            
//         
const UseRef = () =>{
    const[value, setValue] = useState('');
    const count = useRef(0);
    
    useEffect(() => {
        count.current = count.current + 1;
    });
    return(
      <>
      <h1>Rendering: {count.current} times</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      </>
    )
};

export default UseRef;