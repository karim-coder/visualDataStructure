import { Typography } from "@mui/material";
import React from "react";

const Array = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="body1" style={{ fontSize: 30, fontWeight: 700 }}>
        Array
      </Typography>

      <Typography variant="body1">
        An array is a collection of items stored at contiguous memory locations.
        The idea is to store multiple items of the same type together. This
        makes it easier to calculate the position of each element by simply
        adding an offset to a base value, i.e., the memory location of the first
        element of the array (generally denoted by the name of the array).{" "}
        <br />
        An array is a linear data structure that collects elements of the same
        data type and stores them in contiguous and adjacent memory locations.
        Arrays work on an index system starting from 0 to (n-1), where n is the
        size of the array.
      </Typography>
    </div>
  );
};

export default Array;
