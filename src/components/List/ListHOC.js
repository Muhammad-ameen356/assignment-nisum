import React, { useState } from "react";

const ListHOC = (OrignalComponent) => {
  const NewComponent = () => {
    return <OrignalComponent />;
  };
  return NewComponent;
};

export default ListHOC;
