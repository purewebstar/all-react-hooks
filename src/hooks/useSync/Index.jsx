import { useSyncExternalStore } from 'react';

const UseSyncExternalStore = () =>{
  // getting window size width       
  const width = useSyncExternalStore(
    (listener) => {
      window.addEventListener('resize', listener);
      return () => {
        window.removeEventListener('resize', listener);
      };
    },
    () => window.innerWidth
  );
  // getting window size height        
  const height = useSyncExternalStore(
    (listener) => {
      window.addEventListener('resize', listener);
      return () => {
        window.removeEventListener('resize', listener);
      };
    },
    () => window.innerHeight
  );
  return <p>WindowSize: {width} x {height}</p>;
};

export default UseSyncExternalStore;