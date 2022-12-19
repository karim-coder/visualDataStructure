import React from "react";
import Snackbar from "@mui/material/Snackbar";
const SnackbarMessage = (props) => {
  const [state, setState] = React.useState({
    open: true,
    message: props.message,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, message: props.message, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={state.message}
        key={vertical + horizontal}
      />
    </div>
  );
};

export default SnackbarMessage;
