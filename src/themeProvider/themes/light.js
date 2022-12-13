import { createTheme } from "@mui/material/styles";
import "./font.css";

const font = "Poppins";

export const LIGHT = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
  },
  name: "LIGHT",
  overrides: {
    //.MuiPopover-paper

    MuiPopover: {
      paper: {
        minWidth: "200px",
        maxWidth: "400px",
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
        containerColor:
          "linear-gradient(275deg, rgba(8,255,239,1) 44%, rgba(0,212,198,1) 52%, rgba(0,171,159,1) 100%)",
        // 'linear-gradient(-45deg, #2196f3a1 0%, #2196f3a1 33%, #00bfa5a1 100%)',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        containerColor:
          "linear-gradient(275deg, rgba(8,255,239,1) 44%, rgba(0,212,198,1) 52%, rgba(0,171,159,1) 100%)",
        // 'linear-gradient(-45deg, #2196f3a1 0%, #2196f3a1 33%, #00bfa5a1 100%)',
      },
    },
    MuiGrid: {
      root: {
        paddingRight: "3px",
        fontFamily: font,
      },
    },

    MuiCheckbox: {
      colorSecondary: {
        Mui: {
          checked: {
            color: "#FF6F00",
          },
        },
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        fontFamily: font,
      },
    },

    MuiTypography: {
      root: {
        fontFamily: font,
        fontSize: 16,
        // color: '#666c73',
      },
      body1: {
        fontFamily: font,
        fontSize: 17,
        // color: '#666c73',
      },
      body2: {
        fontFamily: font,
        fontSize: 16,
      },
    },

    // MuiTabScrollButton-root

    MuiTab: {
      wrapper: {
        fontFamily: font,
        fontSize: "16px",
        fontWeight: "bold",
      },
      textColorInherit: {
        opacity: "unset",
      },
    },

    MuiTableCell: {
      stickyHeader: {
        fontSize: "16px",
        fontWeight: "bold",
        fontFamily: font,
        color: "#666c73",
      },
      head: {
        fontSize: "16px",
        fontWeight: "bold",
        fontFamily: font,
        color: "#666c73",
      },

      body: {
        fontFamily: font,
      },
    },

    MuiInputLabel: {
      formControl: {
        fontSize: 16,
        width: "max-content",
        fontFamily: font,
        lineHeight: "0",
      },
      asterisk: {
        color: "red",
      },
    },

    MuiInputBase: {
      input: {
        fontSize: 14,
        fontFamily: font,
      },
    },

    PrivateTabIndicator: {
      colorSecondary: {
        backgroundColor: "#fff",
      },
    },

    MuiButton: {
      root: {},
      textPrimary: {},
      label: {
        backgroundColor: "#fff",
        border: "2px solid #FF6F00",
        padding: "7px 20px",
        borderRadius: 15,
        color: "#FF6F00",
        fontWeight: "bold",
      },
    },
    MuiTableRow: {
      selected: {
        backgroundColor: "#FF6F00",
      },
    },
    MuiListItemIcon: {
      root: {
        color: "#FF6F00",
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        // height: 'unset',
        height: "125px",
        // backgroundColor: 'unset',
      },
    },

    MuiPickersToolbarText: {
      toolbarBtnSelected: {
        color: "#000",
      },
      toolbarTxt: { fontWeight: "bold", color: "#669fba" },
    },

    MuiPickerDTToolbar: {
      separator: {
        color: "#fff",
      },
    },

    MuiPickersModal: {
      dialog: {
        overflow: "hidden",
      },
    },

    // MuiPickersModal: {
    //   dialog: {
    //     overflow: 'initial',
    //   },
    // },

    MuiPickersToolbarButton: {
      toolbarBtn: {
        textTransform: "math-auto",
      },
    },
  },

  palette: {
    type: "light",
    primary: {
      main: "#0039C6",
    },
    secondary: {
      main: "#0191b4",
    },
    info: {
      main: "#669fba",
    },
    background: {
      default: "#fafafa",
    },
  },
  // #004e9a #fa4492 #2d82b5 #c73866 #455054 dark b60f46 0c7bb3 good one 0c7bb3 #0039C6

  custom: {
    greenColor:
      "linear-gradient(120deg,rgba(126, 87, 194, 0.8), #fff )" /* fallback for old browsers */,
    orangeColor:
      "linear-gradient(to right, #f7971e, #ffd200)" /* fallback for old browsers */,
    ongoingColor: "linear-gradient(to right, #de6262, #ffb88c)",
    verifyPaymentColor: "linear-gradient(to right, #d53369, #cbad6d)",
    deliveredColor: "linear-gradient(to right, #a73737, #7a2828)",
    completedColor: "linear-gradient(to right, #f857a6, #ff5858)",
    refundedColor: "linear-gradient(to right, #4b6cb7, #182848)",
    cancelledColor: "linear-gradient(to right, #fc354c, #0abfbc)",
    red: "green",
    white: "#fff",
    background: "#fff",
    textColor: "#000000",
    whiteFont: "#fff",
    dialogToolbar: "#7e57c2",
    containerColor:
      "linear-gradient(120deg,rgba(126, 87, 194, 0.8) 50%, #fff )",
    // containerColor:
    //   'linear-gradient(-45deg, #2196F3 0%, #2196F3 33%, #00BFA5 100%)',
    topHeader: {
      toolbarColor: "#7e57c2",
      // toolbarColor:
      //   'linear-gradient(-45deg, #2196F3 0%, #2196F3 33%, #00BFA5 100%)',
      toolBarLogout: "#fff",
      toolBarLanguage: "#fff",
    },
    sideDrawer: {
      boxShadow: "0 10px 15px -5px rgba(62, 57, 107, .07)",
      backdropFilter: "saturate(180%) blur(20px)",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      companyName: "rgba(0, 0, 0, 0.87)",
      userName: "#000",
      menuColor: "#000",
    },
    productCard: {
      backgroundColor: "#2aa839",
      primaryTextColor: "#f0582d",
      secondaryTextColor: "#707070",
    },
    forms: {
      secondaryTextColor: "#767676",
      borderColor: "#ccc",
    },
    category: {
      countBackground: "#F4F8EC",
    },
  },
});
