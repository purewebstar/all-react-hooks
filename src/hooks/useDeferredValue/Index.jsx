import { useDeferredValue, useState } from 'react';

const SlowUI = () => (
  <>
    {Array(300)
      .fill(1)
      .map((_, index) => (
        <span key={index}>{100000} </span>
      ))}
  </>
);

const UseDeferredValue = () => {
  const [value, setValue] = useState(0);
  const deferredValue = useDeferredValue(value);

  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <>
      <button onClick={handleClick}>{value}</button>
      <div>DeferredValue: {deferredValue}</div>
      <div>
        <SlowUI />
      </div>
    </>
  );
};

export default UseDeferredValue;