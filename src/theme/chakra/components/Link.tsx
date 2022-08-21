import { getExtendedThemeColors } from "../../../utils";

const config = {
  baseStyle: {
    fontFamily: "'Poppins', sans-serif;",
    fontWeight: 500,
    color: getExtendedThemeColors().primary,
    _hover: {
      textDecoration: 'none',
      color: getExtendedThemeColors().primaryDark
    },
  },
  variants: {
    default: {
    },
    ghost: {
      color: 'inherit',
      fontWeight: 400,
      _hover: {
        textDecoration: 'none',
      },
    },
    defaultProps: {
      variant: 'default',
    },
  }
};

export default config;