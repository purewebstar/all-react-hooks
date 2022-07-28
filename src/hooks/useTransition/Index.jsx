import { useEffect, useState, useTransition } from 'react';

const SlowUI = ({ value }) => (
  <>
    {Array(value)
      .fill(1)
      .map((_, index) => (
        <span key={index}>{value - index} </span>
      ))}
  </>
);

const UseTransition = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(100000);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    setValue(value + 1);
    startTransition(() => setValue2(value2 + 1));
  };

  return (
    <>
      <button onClick={handleClick}>{value}</button>
      <div
        style={{
          opacity: isPending ? 0.5 : 1,
        }}
      >
        <SlowUI value={value2} />
      </div>
    </>
  );
}

export default UseTransition;