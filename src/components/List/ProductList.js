import {
  Heading,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const ProductList = ({ data }) => {
  return (
    <>
      <Heading fontSize="3xl" style={{ textDecoration: "underline" }} mt={10}>
        Product List
      </Heading>

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Product Name</Th>
              <Th>Product Description</Th>
              <Th>Price ($)</Th>
              <Th>Brand Name</Th>
              <Th>Image</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item, ind) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{item.title}</Td>
                  <Td>{item.description}</Td>
                  <Td>{item.price}</Td>
                  <Td>{item.brand}</Td>
                  <Td>
                    <img src={item.thumbnail} alt="" width={100} />
                  </Td>
                  <Td isNumeric>
                    <Link> Edit</Link>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductList;
