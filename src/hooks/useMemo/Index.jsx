import React, {useState, useMemo} from 'react';      
// expensive computation eg.              
const expensive = (arg) =>{    
   for(let i=0; i<100000000; i++){         
     arg+=1;
   }
   return arg;
}               
//         
const UseMemo = () =>{
    const[count, setCount] = useState(0);
    const [data, setData] = useState([]);
    // returns memorized value & updates only when count changed            
    const add = useMemo(() => expensive((count), [count]));          
    // count handler
    const handleCount = () =>{
        setCount((c) => c+1);
    }      
    const handleData = () =>{
        setData((d) => [...d, 'something'])
    }
    console.log(`add: ${add}`, data)
    return(
      <>
      <p>Count: {count}</p>               
      <button onClick={handleCount} >                                 
        Add Count             
      </button>
      <br/>
      <button onClick={handleData} >                                 
        Add Data             
      </button>
      </>
    )
};

export default UseMemo;