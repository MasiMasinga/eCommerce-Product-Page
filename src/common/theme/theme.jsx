import { createTheme } from "@mui/material/styles";
import { Colors } from "../utils/constants";

const ThemeFontFamily = "'Poppins', sans-serif";

const theme = createTheme({
  typography: {
    fontFamily: ThemeFontFamily,
  },
  shape: {
    borderRadius: 5,
  },
  palette: {
    primary: {
      main: Colors.primary,
      light: Colors.accent,
    },
    neutral: {
      main: Colors.black,
      light: Colors.white,
    },
    success: {
      main: Colors.success,
    },
    error: {
      main: Colors.error,
    },
    warning: {
      main: Colors.warning,
    },
  },
  shadows: {
    0: "",
    1: "0 6px 20px rgba(0 0 0/ 0.1)",
    4: "0 6px 20px rgba(0 0 0/ 0.1)",
    6: "0 6px 20px rgba(0 0 0/ 0.1)",
    8: "0 6px 20px rgba(0 0 0/ 0.1)",
    16: "0 6px 20px rgba(0 0 0/ 0.1)",
    24: "0 6px 20px rgba(0 0 0/ 0.1)",
  },
});

const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

theme.typography = {
  pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
  h1: {
    fontWeight: 600,
    fontSize: "45px",
    color: Colors.header,
    fontFamily: ThemeFontFamily,
    [theme.breakpoints.up("md")]: {
      fontSize: "65px",
    },
  },
  h2: {
    fontWeight: 600,
    fontSize: "50px",
    fontFamily: ThemeFontFamily,
  },
  h3: {
    fontWeight: 600,
    fontSize: "36px",
    fontFamily: ThemeFontFamily,
  },
  h4: {
    fontWeight: 600,
    fontSize: "30px",
    fontFamily: ThemeFontFamily,
  },
  h5: {
    fontWeight: 600,
    fontSize: "20px",
    fontFamily: ThemeFontFamily,
  },
  h6: {
    fontWeight: 600,
    fontSize: "16px",
    fontFamily: ThemeFontFamily,
  },
  subheader: {
    fontWeight: 400,
    fontSize: "18px",
    color: Colors.greyDark,
    fontFamily: ThemeFontFamily,
  },
  paragraph: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    color: Colors.black,
    fontFamily: ThemeFontFamily,
  },
  subtitle: {
    fontWeight: 400,
    fontSize: "12px",
    color: Colors.body,
    fontFamily: ThemeFontFamily,
  },
  link: {
    fontWeight: 600,
    fontSize: "14px",
    color: Colors.primary,
    fontFamily: ThemeFontFamily,
  },
  tag: {
    fontWeight: 400,
    fontSize: "12px",
    color: Colors.white,
    fontFamily: ThemeFontFamily,
  },
};

theme.components = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        paragraph: "p",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        fontFamily: ThemeFontFamily,
        fontWeight: "bold",
        ...(ownerState.variant === "contained" && {
          backgroundColor: Colors.accent,
          color: theme.palette.primary.contrastText,
          border: `2px solid ${Colors.accent}`,
          "&:hover": {
            backgroundColor: Colors.primary,
            border: `2px solid ${Colors.primary}`,
          },
        }),
        ...(ownerState.variant === "outlined" && {
          border: `2px solid ${Colors.accent}`,
          "&:hover": {
            backgroundColor: Colors.accent,
            color: theme.palette.primary.contrastText,
            border: `2px solid ${Colors.accent}`,
          },
        }),
        ...(ownerState.disabled && {
          backgroundColor: `${Colors.greyMed} !important`,
          color: Colors.greyDark,
          border: `2px solid ${Colors.greyMed} !important`,
        }),
      }),
    },
    variants: [
      {
        props: { variant: "plain" },
        style: {
          backgroundColor: "transparent",
          color: Colors.primary,
        },
      },
      {
        props: { variant: "plain-white" },
        style: {
          fontWeight: 900,
          fontSize: "14px",
          ".MuiSvgIcon-root": {
            fontSize: "24px",
          },
        },
      },
    ],
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        ".MuiSvgIcon-root": {
          fontSize: 20,
          color: Colors.accent,
        },
        "&:before": {
          content: `''`,
          display: "none",
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 7,
          backgroundColor: Colors.primary,
          height: 40,
          borderRadius: "0px 10px 10px 0",
        },
        " &.Mui-selected": {
          backgroundColor: "initial",

          " &:before": {
            display: "block",
          },
          ".MuiListItemText-root": {
            fontWeight: "bold",
            color: Colors.accent,
          },
          ".MuiListItemIcon": {
            color: Colors.warning,
          },
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        fontFamily: ThemeFontFamily,
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        fontFamily: ThemeFontFamily,
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontFamily: ThemeFontFamily,
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        ".MuiTabs-indicator": {
          backgroundColor: Colors.accent,
        },
      },
    },
  },
};

export default theme;
