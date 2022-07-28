import { useEffect, useInsertionEffect, useLayoutEffect } from 'react';

const Child = () => {
  useEffect(() => {       
    console.log('Child1');                               
  });
  useLayoutEffect(() => {
    console.log('Child2');                 
  });
  useInsertionEffect(() => {
    console.log('Child3');             
  });
};

const UseInsertionEFfect = () => {
  useEffect(() => {
    console.log('useEffect');
  });
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  });
  useInsertionEffect(() => {
    console.log('useInsertionEffect');
  });
  return (
    <div className="App">
      <Child />
      <p>Random Text</p>
    </div>
  );
};

export default UseInsertionEFfect;