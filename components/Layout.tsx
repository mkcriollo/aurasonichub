import React from "react";
import { Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction="column" flex={1}>
      <Navbar />
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "2rem 0",
        }}
      >
        {children}
      </main>
      <Footer />
    </Flex>
  );
};

export default Layout;
