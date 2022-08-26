import React from "react";
import { Text, Stack } from "@chakra-ui/react";
import ClickCounter from "../../components/counter/ClickCounter";
import HoverCounter from "../../components/counter/HoverCounter";
import UserList from "../../components/List/UserList";
import ProductList from "../../components/List/ProductList";
import ListHOC from "../../components/List/ListHOC";
import { productList, userList } from "../../constant/list.constant";

const Home = () => {
  const User = ListHOC(UserList, userList);
  const Product = ListHOC(ProductList, productList);

  return (
    <div>
      <User />
      <Product />
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <Text fontSize="6xl">Home Page</Text> */}
    </div>
  );
};

export default Home;
