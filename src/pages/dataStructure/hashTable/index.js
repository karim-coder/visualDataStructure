import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Grow,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { motion, AnimatePresence } from "framer-motion";
import { makeStyles } from "@mui/styles";
import TextCode from "../../../components/TextCode";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import "./style.css";
import SnackbarMessage from "../../../components/SnackbarMessage";
import clsx from "clsx";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

import ChipInput from "../../../components/ChipInput";
import TagsInput from "../../../components/TagsInput";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 600,
    marginTop: 10,
    borderBottom: "2px solid black",
  },
  content: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#F9F9F9",
    fontSize: 16,
    lineHeight: 2.1,
    // fontFamily: "Inter",
    fontWeight: 400,
  },
  normalText: {
    fontSize: 16,
    lineHeight: 2.1,
  },
  hash: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    marginTop: 10,
    animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
    transformOrigin: "0",
  },
  "@keyframes myEffect": {
    "0%": {
      transform: "scale(0)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
}));

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Arrow = ({ color }) => {
  return (
    <div
      style={{
        width: 62,
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: 6,
          width: 50,
          background: color,
          height: 2,
          float: "left",
        }}
      />
      <div
        style={{
          width: 0,
          height: 0,
          borderTop: "6px solid transparent",
          borderBottom: "6px solid transparent",
          borderLeft: `12px solid ${color}`,
          float: "right",
        }}
      />
    </div>
  );
};

const data = [
  { 0: [20, 35, 55] },
  { 1: [1, 21, 36, 11] },
  { 2: [12] },
  { 3: [13, 18, 3] },
  { 4: [4, 9] },
];

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const HashTable = () => {
  const classes = useStyles();
  const [list, setList] = useState([10, 7, 5, 1, 2, 6, 4, 8, 9, 3]);

  const [hashSize, setHashSize] = useState(5);
  const [input, setInput] = useState(null);
  const [hashValue, setHashValue] = useState([...data]);

  const [test, setTest] = useState(false);
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false);

  const [chipData, setChipData] = React.useState([]);

  // console.log("Hash Value: ", chipData);

  const [count, setCount] = useState(0);

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= chipData.length) {
        setChipData(null);
        clearInterval(interval);
        setInput(null);
        console.log("Hash Value: ", chipData);
      } else {
        setInput(parseInt(chipData[counter]));
        setCount((counter) => counter + 1);
        let arr = [...hashValue];
        let arr1 = [
          ...arr[parseInt(chipData[counter]) % 5][
            parseInt(chipData[counter]) % 5
          ],
        ];
        if (!arr1.includes(parseInt(parseInt(chipData[counter])))) {
          arr1.push(parseInt(parseInt(chipData[counter])));
          arr[parseInt(chipData[counter]) % 5][
            parseInt(chipData[counter]) % 5
          ] = arr1;
          setHashValue(arr);
          setShow(true);
          console.log(counter, "Hi");

          // local variable that this closure will see
        } else {
          // setInput(null);
          setMessage(
            `${parseInt(chipData[counter])} already exist in hash table.`
          );

          setShow(false);
          // setTimeout(() => {
          //   setInput(null);
          // }, 1000);
        }
        counter++;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [show, setHashValue]);
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="body1" style={{ fontSize: 30, fontWeight: 700 }}>
        Hash Table
      </Typography>
      <Typography variant="body1">
        The Hash table data structure stores elements in key-value pairs where
        <br />
        Bubble sort works on the repeatedly swapping of adjacent elements until
        they are not in the intended order. It is called bubble sort because the
        movement of array elements is just like the movement of air bubbles in
        the water. Bubbles in water rise up to the surface; similarly, the array
        elements in bubble sort move to the end in each iteration.
        <br />
        <br />
        Although it is simple to use, it is primarily used as an educational
        tool because the performance of bubble sort is poor in the real world.
        It is not suitable for large data sets. The average and worst-case
        complexity of Bubble sort is O(n2), where n is a number of items.
      </Typography>

      {/* <h1>Counter: {counter}</h1> */}

      {/* <TextField
        // type="number"
        label="Number"
        size="small"
        style={{ marginTop: 20 }}
        value={input ? input : ""}
        onChange={(e) => {
          e.target.value = e.target.value.replace(/[A-Za-z!@#$%^&*().]/g, "");
          setInput(e.target.value);
        }}
      /> */}

      <Grid sx={{ mt: 3 }}>
        <TagsInput
          selectedTags={(chip) => {
            setChipData(chip);
          }}
          value={chipData}
          fullWidth
          type="number"
          variant="outlined"
          id="tags"
          name="tags"
          placeholder="add Tags"
          label="tags"
        />
      </Grid>

      <Button
        variant="outlined"
        // startIcon={<AddIcon />}
        // disabled={!input}
        style={{ marginLeft: 10, textTransform: "none", marginTop: 20 }}
        onClick={() => {
          setShow(true);
        }}
      >
        Insert
      </Button>

      <Grid
        // container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ alignItems: "end", marginTop: 20 }}
      >
        {hashValue.map((item, ind) => (
          <div style={{ display: "flex", margin: 10 }}>
            <Typography
              style={{
                transition: "all 0s ease-in",
                width: 60,
                marginTop: 10,
                position: "relative",
                padding: "5px 10px",
                backgroundColor:
                  ind === parseInt(input) % 5 ? "green" : "white",
                color: ind === parseInt(input) % 5 ? "white" : "black",
                border: `1px solid ${
                  ind === parseInt(input) % 5 ? "green" : "blue"
                }`,
                textAlign: "center",
              }}
            >
              {ind}
              {/* <motion.svg
                // width="600"
                // viewBox="0 0 600 600"
                initial="hidden"
                animate="visible"
              >
                <motion.line
                  x1="75"
                  y1="30"
                  x2="220"
                  y2="30"
                  stroke="#00cc88"
                  variants={draw}
                  custom={ind}
                />
              </motion.svg> */}
            </Typography>

            <Grid
              container
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ alignItems: "center" }}
            >
              {item[ind]
                // .concat(show && input % 5 === ind ? [0] : [])
                .map((value, index) => (
                  <div className={classes.hash}>
                    <Arrow
                      color={value === parseInt(input) ? "red" : "black"}
                    />
                    <Typography
                      className="show"
                      style={{
                        width: 60,
                        position: "relative",
                        padding: "5px 10px",
                        backgroundColor:
                          value === parseInt(input) ? "red" : "white",
                        color: value === parseInt(input) ? "white" : "black",
                        border: `1px solid ${
                          value === parseInt(input) ? "red" : "black"
                        }`,
                        textAlign: "center",
                      }}
                    >
                      {value}
                    </Typography>
                    <div className="graybox"></div>
                  </div>
                ))}
            </Grid>
          </div>
        ))}
      </Grid>

      <div style={{ display: "flex", marginTop: 20 }}>
        <Typography className={classes.title}>Algorithm Code:</Typography>
      </div>

      <TextCode
        code={`begin BubbleSort(arr)  
   for all array elements  
      if arr[i] > arr[i+1]  
         swap(arr[i], arr[i+1])  
      end if  
   end for     
   return arr     
end BubbleSort  `}
      />

      <Grid sx={12} style={{ textAlign: "center" }}>
        <Link to={"/quiz"} style={{ textDecoration: "none" }}>
          <Button variant="contained" style={{ backgroundColor: "orange" }}>
            Give a Test
          </Button>
        </Link>
      </Grid>
      {message != null && <SnackbarMessage message={message} open={true} />}
    </div>
  );
};

export default HashTable;
