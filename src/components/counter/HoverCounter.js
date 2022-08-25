import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CounterHOC from "./CounterHOC";

const HoverCounter = ({ counter, handler }) => {
  //   const [counter, setCounter] = useState(0);

  return (
    <div>
      <Text fontSize="3xl">{counter}</Text>
      <Button colorScheme="blue" onMouseOver={handler}>
        Hover Me
      </Button>
    </div>
  );
};

export default CounterHOC(HoverCounter);
