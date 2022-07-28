import React, {useEffect, useReducer} from 'react';      
// initial count    
let initialState = 0;                  
// reducer function               
const reducer = (state = initialState, action)=>{
    // check action type                
    switch (action.type){
        case 'UPDATE':
        return {
            ...state,
            count: (action.payload)
        };
        default: 
        return state;
    };
};
// reducer
const UseReducer = () =>{
    const[num, dispatch] = useReducer(reducer, initialState);

    const handleCount = () =>{
        dispatch({type: 'UPDATE', payload: 1})
    }
   // console.log(num&&num.count)            
    return(
      <>
      <p>Count: {num&&num.count}</p>               
      <button onClick={handleCount} >                                
        Add Count             
      </button>
      </>
    )
};

export default UseReducer;