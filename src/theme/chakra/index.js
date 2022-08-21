import { extendTheme } from "@chakra-ui/react";
import Heading from "./components/Heading";
import Text from "./components/Text";
import Link from "./components/Link";

// Add components here for custom chakra components
const overrides = {
  components: { Heading, Text, Link },
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export default extendTheme(overrides);