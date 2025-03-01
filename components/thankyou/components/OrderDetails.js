import React from "react";
import { Box, Image, Stack, Heading, Text, Spacer } from "@chakra-ui/react";

const OrderDetails = () => {
  return (
    <Box w={{ base: "100%", md: "60%" }} p={{ base: "5", md: "10" }}>
      <Stack>
        <Heading>Logo</Heading>
        <Text fontSize="md">Order XX123</Text>
        <Text fontSize="lg">Thank you Maryam!</Text>
        <Box>
          <Image
            alt="google-map"
            src={"/googlemap.png"}
            w={{ base: "100%", md: "100%" }}
            h={{ base: "50%", md: "300px" }}
          />
          <Text fontSize="md">Your order is confirmed</Text>
          <Text fontSize="sm">
            We ve accepted your order, and we re getting it ready. Come back to
            this page for updates on your shipment status.
          </Text>
          <Spacer />
        </Box>
      </Stack>
    </Box>
  );
};

export default OrderDetails;
