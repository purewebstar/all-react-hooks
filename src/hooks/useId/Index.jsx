import React, {useId} from 'react';         

const UseId = () =>{   
  const id = useId();
  return <div>id({id})</div>;
};

export default UseId;