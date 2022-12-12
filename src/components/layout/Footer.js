import { AppBar, Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
// import dummy from "../dummy.json";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "block",
    color: theme.custom.white,
    textDecoration: "none",
    marginTop: 5,
    fontSize: 15,
  },
}));

export default function Footer() {
  // const classes = useStyles();

  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingTop: 10,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <AppBar
        position="relative"
        sx={{
          backgroundColor: `${(theme) => theme.palette.primary.main} -50%`,
          filter: "brightness(90%)",
        }}
      >
        <Box
          sx={{
            borderTop: "solid 1px",
            borderColor: (theme) => theme.custom.forms.borderColor,
            p: 3,
          }}
        >
          <Typography style={{ textAlign: "center" }}>
            &copy; {new Date().getFullYear()} dataStructure.com
          </Typography>
        </Box>
      </AppBar>
    </Box>
  );
}
