import React, { useState } from "react";

const State = () => {
  const [data, setData] = useState(0);
  return (
    <>
      <p style={{ textAlign: "center", fontSize: "30px" }}>{data}</p>
      <button
        style={{ marginLeft: "48.5%" }}
        onClick={() => {
          setData(data + 1);
        }}
      >
        Increase
      </button>
    </>
  );
};

export default State;
