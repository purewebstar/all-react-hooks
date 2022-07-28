import React, {useState} from 'react';

const Index = () =>{
    // Always initialize a state with:                                                        
    // null,undefined,empty array,string,num,...                                       
    const [num, setNum] = useState(0);
    const [data, setData] = useState([1,8,9,3,5]);                                         
    /**
     * Update states in: Functions, Hooks, ...                                                 
     */
      // setNum(10);                     
      // setData([1,5,9,0,3])             
    return(
    <>
    <h1>Num is: {num}</h1>                                            
             
    {  
    data&&data.map((d,i)=>(                     
        <React.Fragment key={i}  >                                              
        <h3>{d&&d}</h3>                            
        </React.Fragment>                   
    ))                 
    }
    </>
    );
};

export default Index;