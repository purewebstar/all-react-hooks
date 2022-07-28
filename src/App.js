import React from 'react';
import {useRoutes} from 'react-router-dom';
import routes from './routes';

const App = () =>{
  let elements = useRoutes(routes);
  return (
    <>
      {elements}
    </>
  );
};

export default App;
