import React, {useState, useCallback} from 'react';         
import Data from './Data';  
//         
const UseCallback = () =>{
    // count initial states       
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addData = useCallback(() => {
      setData((d) => [...d, 3]);
    }, [data]);
    return(
      <>
        <Data addData={addData} data={data} />
        Count: {count}
        <button onClick={increment}>+</button>                    
      </>
    );
};

export default UseCallback;