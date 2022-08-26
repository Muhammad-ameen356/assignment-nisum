import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Heading,
  Link,
} from "@chakra-ui/react";

import React from "react";
import ListHOC from "./ListHOC";
const UserList = ({ data }) => {
  return (
    <>
      <Heading fontSize="3xl" style={{ textDecoration: "underline" }}>
        User List
      </Heading>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>email</Th>
              <Th isNumeric>Action</Th>{" "}
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item, ind) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{item.firstName}</Td>
                  <Td>{item.lastName}</Td>
                  <Td>{item.email}</Td>
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

export default UserList;
