import React, {useState, useEffect} from 'react';    

const EmptyArray = () =>{
  // states
  const [count, setCount] = useState(0);            

  // Takes effecton First Render Only                
  // on first render sets count value: 10                    
  useEffect(()=>{
    setCount(10)     
  },[]);

  return(
    <>
      <p>Count: {count}</p>
    </>
  )
};

const Dependencies = () =>{
  // count initial states       
  const [count, setCount] = useState(0);
  // Takes effect on first render & when count state changes         
  useEffect(()=>{
    // on keydown perform count up            
    const handleKeyup = (e) => {
      if(e.key === 'ArrowUp') setCount((c) => c+1)               
    }
    // register event handler       
    window.addEventListener("keyup", handleKeyup);                            
    // cleanup effect               
    return () => window.removeEventListener("keyup", handleKeyup);                                  
  }, [count]); 

  return(
    <>
      <p>Count: {count}</p>                    
      <p> Press ArrowUP for Increment </p>                         
    </>
  );
};

const NoDependencies = () =>{
  // count initial states        
  const [count, setCount] = useState(0);      
  // Takes effect on every render                
  useEffect(()=>{
    // render on very 1 second               
    let timer = setTimeout(() => {            
        setCount(count + 1);
    }, 1000);      
    // clean up             
    return () => clearTimeout(timer);                      
  }); 

  return(
    <>
      <p>Count: {count}</p>                        
      <p>
      Count value will update every 1 second                
      </p>            
    </>
  );
};


//export default NoDependencies;
export default Dependencies;
//export default EmptyArray;