import React from "react";
import { Text, Stack } from "@chakra-ui/react";
import ClickCounter from "../../components/counter/ClickCounter";
import HoverCounter from "../../components/counter/HoverCounter";
import UserList from "../../components/List/UserList";
import ProductList from "../../components/List/ProductList";

const Home = () => {
  return (
    <div>
      <UserList />
      <ProductList />
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <Text fontSize="6xl">Home Page</Text> */}
    </div>
  );
};

export default Home;
