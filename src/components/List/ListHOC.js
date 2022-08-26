import React, { useState } from "react";

const ListHOC = (OrignalComponent, data) => {
  const NewComponent = () => {
    return <OrignalComponent data={data} />;
  };
  return NewComponent;
};

export default ListHOC;
