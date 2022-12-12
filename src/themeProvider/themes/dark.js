import { createTheme } from "@mui/material/styles";

export const DARK = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
  },
  name: "DARK",
  overrides: {
    //.MuiPopover-paper
    MuiPopover: {
      paper: {
        minWidth: "200px",
      },
    },
    MuiDialog: {
      root: {
        // background: 'linear-gradient(-45deg, #2196f3a1 0%, #2196f3a1 33%, #00bfa5a1 100%)',
      },
      container: {
        // background: 'linear-gradient(-45deg, #2196f3a1 0%, #2196f3a1 33%, #00bfa5a1 100%)',
      },
      paperFullScreen: {
        background:
          "linear-gradient(-45deg, #2196f3a1 0%, #2196f3a1 33%, #00bfa5a1 100%)",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        background:
          "linear-gradient(-45deg, #2196f3a1 0%, #2196f3a1 33%, #00bfa5a1 100%)",
      },
    },
    MuiGrid: {
      root: {
        paddingRight: "3px",
      },
    },
    MuiInputLabel: {
      formControl: {
        fontSize: "12px",
        width: "max-content",
        lineHeight: "1.5",
      },
      asterisk: {
        color: "red",
      },
    },
    MuiInputBase: {
      input: {
        fontSize: 13,
      },
    },
    MuiFormLabel: {
      root: {
        color: "#42A5F5",
        "&$focused": {
          color: "#42A5F5",
        },
      },
      asterisk: {
        color: "red",
      },
    },
    MuiInput: {
      underline: {
        "&:hover:not($disabled):after": {
          borderBottom: "1px solid #42A5F5",
        },
        "&:hover:not($disabled):before": {
          borderBottom: "1px solid #42A5F5",
        },
        "&:focus:not($disabled):after": {
          borderBottom: "1px solid #42A5F5",
        },
        "&:focus:not($disabled):before": {
          borderBottom: "1px solid #42A5F5",
        },
        "&:after": {
          borderBottom: "1px solid #42A5F5",
        },
        "&:before": {
          borderBottom: "1px solid #42A5F5",
        },
        borderBottom: "1px solid #42A5F5",
      },
    },
    MuiButton: {
      root: {
        background: "#00BFA5",
        "&:hover": {
          backgroundColor: "#00bfa5bd",
        },
      },
      textPrimary: {
        color: "#fff",
        "&:hover": {
          backgroundColor: "#00bfa5bd",
        },
      },
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#419fab",
    },

    info: {
      main: "#669fba",
    },
    background: {
      default: "#333333",
    },
  },
  custom: {
    background: "#424242",
    containerColor:
      "linear-gradient(-45deg, #2196f3a1 0%, #2196f3a1 33%, #00bfa5a1 100%)",
    topHeader: {
      toolbarColor:
        "linear-gradient(-45deg, #2196f3a1 0%, #2196f3a1 33%, #00bfa5a1 100%)",
      toolBarLogout: "#fff",
      toolBarLanguage: "#fff",
    },
    background: "#fff",
    textColor: "#000000",
    sideDrawer: {
      boxShadow: "0 10px 15px -5px rgba(62, 57, 107, .07)",
      backdropFilter: "saturate(180%) blur(20px)",
      backgroundColor: "rgba(66, 66, 66, 0.75)",
      companyName: "rgba(225, 225, 225, 0.87)",
      userName: "#fff",
      menuColor: "#fff",
    },
    productCard: {
      backgroundColor: "",
      primaryTextColor: "",
      secondaryTextColor: "",
    },
    forms: {
      secondaryTextColor: "",
      borderColor: "",
    },
    category: {
      countBackground: "",
    },
  },
});
