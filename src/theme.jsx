import { extendTheme } from "@chakra-ui/react";

// Je aangepaste thema-configuratie
const theme = extendTheme({
  colors: {
    brand: {
      500: "#1A365D", // Voorbeeldkleur
      600: "#153E75",
      700: "#2A69AC",
    },
  },
});

export default theme; // Exporteer het thema
