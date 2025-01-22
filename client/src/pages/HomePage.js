import Login from "../../src/components/Authentication/Login";
import SignUp from "../../src/components/Authentication/SignUp";
import {
  Box,
  Container,
  Text,
  TabPanel,
  TabPanels,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);
  return (
    <>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          textAlign="center"
          p={3}
          bg={"white"}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans">
            Talk-A-Tive
          </Text>
        </Box>
        <Box
          bg={"white"}
          w={"100%"}
          p={4}
          borderRadius={"lg"}
          borderWidth={"1px"}
        >
          <Tabs variant="soft-rounded" color={"black"}>
            <TabList mb={"1em"}>
              <Tab width={"50%"}>Login</Tab>
              <Tab width={"50%"}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
