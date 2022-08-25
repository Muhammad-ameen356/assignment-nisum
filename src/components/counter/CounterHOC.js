import React, { useState } from "react";

const CounterHOC = (OrignalComponent) => {
  const NewComponent = () => {
    const [counter, setCounter] = useState(0);
    return (
      <OrignalComponent
        counter={counter}
        handler={() => setCounter((pre) => pre + 1)}
      />
    );
  };
  return NewComponent;
};

export default CounterHOC;
