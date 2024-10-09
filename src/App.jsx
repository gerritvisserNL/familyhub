import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

function App() {
  return (
    <Box p={4}>
      {" "}
      <Text fontSize="2xl" color="teal.500">
        Welkom bij mijn Chakra UI-app!
      </Text>{" "}
      <Button colorScheme="teal" mt={4}>
        Klik hier
      </Button>{" "}
    </Box>
  );
}

export default App;
