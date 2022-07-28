import { memo } from "react";

const Data = ({ data, addData }) => {
  return (
    <>
      <h2>Data</h2>
      {data.map((d, i) => {          
        return <p key={i}>{d}</p>
      })}
      <button onClick={addData}>
      Add Data
      </button>
    </>
  );
};

export default memo(Data);