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
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ChipInput from "../../../components/ChipInput";
import TagsInput from "../../../components/TagsInput";
import Slider from "@mui/material/Slider";

import { withStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  console.log("Hi", (props) => props.speed);
  return {
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
    // hash: ({ speed }) => ({
    //   display: "flex",
    //   textAlign: "center",
    //   alignItems: "center",
    //   marginTop: 10,
    //   animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
    //   transformOrigin: "0",
    // }),
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

    box: {
      background: `linear-gradient(to right, black 50%, white 50%)`,
      backgroundSize: "200% 100%",
    },
    box1: {
      background: `linear-gradient(to right, blue 50%, white 50%)`,
      backgroundSize: "200% 100%",
    },
  };
});

// const Div = styled(div);
const Div = styled(Box)(({ theme, speed }) => ({
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
const marks = [
  {
    value: 250,
    label: "0.25s",
  },
  {
    value: 500,
    label: "0.5s",
  },
  {
    value: 1000,
    label: "1s",
  },
  {
    value: 1500,
    label: "1.5s",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

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
  // const classes = useStyles();

  const [speed, setSpeed] = useState(1000);
  const props = { speed: 1000 };
  const classes = useStyles(props);

  const [hashSize, setHashSize] = useState(5);
  const [input, setInput] = useState(null);
  const [inHash, setInHash] = useState(null);
  const [hashValue, setHashValue] = useState([...data]);

  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchValue, setSearchValue] = useState(null);

  const [chipData, setChipData] = React.useState([]);
  const [index, setIndex] = useState(null);
  const [clear, setClear] = useState(false);
  // const [speed, setSpeed] = useState(1000);
  // const classes = useStyles({ speed: speed });
  // console.log("Hash Value: ", chipData);

  const [count, setCount] = useState(0);

  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
    message: "",
  });
  const { vertical, horizontal, open } = state;

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < hashSize; i++) {
      arr.push({});
      arr[i][i] = [];
      if (!clear) {
        let a = 0;
        for (let j = 0; j < Math.floor(Math.random() * hashSize * 5) + 1; j++) {
          let num = Math.floor(Math.random() * 100) + 1;
          let res = num % hashSize;
          if (!arr[i][i].includes(num) && res === i) {
            arr[i][i][a] = num;
            a += 1;
          }
        }
      }
      setClear(false);
    }
    setHashValue([...arr]);
    console.log(arr);
  }, [hashSize]);

  useEffect(() => {
    if (show && chipData.length > 0) {
      let counter = count;
      const interval = setInterval(() => {
        if (counter >= chipData.length) {
          setChipData([]);
          clearInterval(interval);
          setInput(null);
          setCount(0);
          setShow(false);
        } else {
          setCount((counter) => counter + 1);
          let arr = [...hashValue];
          let arr1 = [
            ...arr[parseInt(chipData[counter]) % hashSize][
              parseInt(chipData[counter]) % hashSize
            ],
          ];
          if (!arr1.includes(parseInt(parseInt(chipData[counter])))) {
            setInput({
              value: parseInt(chipData[counter]),
              isInHashTable: false,
            });
            arr1.push(parseInt(parseInt(chipData[counter])));
            arr[parseInt(chipData[counter]) % hashSize][
              parseInt(chipData[counter]) % hashSize
            ] = arr1;
            setHashValue(arr);
            setShow(true);
          } else {
            setInput({
              value: parseInt(chipData[counter]),
              isInHashTable: true,
            });
            setState({
              ...state,
              open: true,
              message: `${parseInt(
                chipData[counter]
              )} already exist in hash table.`,
            });
            // setMessage(
            //   `${parseInt(chipData[counter])} already exist in hash table.`
            // );
          }
          counter++;
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [show, setHashValue]);
  // console.log(index);
  useEffect(() => {
    if (searching && searchValue) {
      let counter = count;

      const interval = setInterval(() => {
        if (
          counter >=
          hashValue[searchValue % hashSize][searchValue % hashSize].length
        ) {
          // setMessage(`${searchValue} doesn't exist in hash table.`);
          // setState({
          //   ...state,
          //   open: true,
          //   message: `${searchValue} doesn't exist in hash table.`,
          // });
          clearInterval(interval);
          setCount(0);
          setSearching(false);
        } else {
          setCount((counter) => counter + 1);
          setIndex(counter + 1);
          if (
            hashValue[searchValue % hashSize][searchValue % hashSize][
              counter
            ] === searchValue
          ) {
            setSearching(false);
            setSearch(true);
          }
          console.log("Hash Value: ", counter);
          counter++;
          if (
            counter >=
              hashValue[searchValue % hashSize][searchValue % hashSize]
                .length &&
            searchValue !==
              hashValue[searchValue % hashSize][searchValue % hashSize][
                counter - 1
              ]
          ) {
            setState({
              ...state,
              open: true,
              message: `${searchValue} doesn't exist in hash table.`,
            });
          }
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [searching]);
  console.log("Searching: ", chipData);
  // console.log("index: ", index);
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

      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Restricted values"
          defaultValue={1000}
          max={1500}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          onChange={(e) => {
            // setSpeed(e.target.value);
          }}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>

      <Grid sx={{ mt: 3 }}>
        <TagsInput
          selectedTags={(chip) => {
            setChipData(chip);
          }}
          // tags={chipData}
          clear={chipData.length === 0 ? true : false}
          fullWidth
          type="number"
          variant="outlined"
          id="tags"
          name="tags"
          placeholder="add Tags"
          label="tags"
        />
        {/* <ChipInput
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          required
          defaultValue={chipData}
          value={chipData}
          onChange={(chip) => {
            console.log("Chip: ", chip);
            setChipData(chip);
          }}
          allowDuplicates={false}
          placeholder={"enter number"}
          label={"Numbers"}
        /> */}
      </Grid>

      <Button
        variant="outlined"
        // startIcon={<AddIcon />}
        disabled={chipData.length === 0 || show}
        style={{ marginLeft: 10, textTransform: "none", marginTop: 20 }}
        onClick={() => {
          // setIndex(null);
          setSearchValue(null);
          // setSearching(false);
          setShow(true);
        }}
      >
        Insert
      </Button>
      <TextField
        size="small"
        style={{ marginLeft: 10, marginTop: 20 }}
        value={searchValue === null ? "" : searchValue}
        type="number"
        disabled={searching || show}
        onChange={(e) => {
          setSearchValue(parseInt(e.target.value));
          setIndex(null);
          setCount(0);
        }}
      />
      <Button
        variant="outlined"
        // startIcon={<AddIcon />}
        // disabled={!input}
        disabled={searching || show || searchValue === null}
        style={{ marginLeft: 10, textTransform: "none", marginTop: 20 }}
        onClick={() => {
          setIndex(0);
          setCount(0);
          setSearching(true);
        }}
      >
        Search
      </Button>

      <TextField
        size="small"
        style={{ marginLeft: 10, marginTop: 20 }}
        value={hashSize}
        disabled={show}
        type="number"
        onChange={(e) => {
          setHashSize(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        // startIcon={<AddIcon />}

        style={{ marginLeft: 10, textTransform: "none", marginTop: 20 }}
        disabled={show}
        onClick={() => {
          setClear(true);
          setHashSize(hashSize - 1 + 1);
        }}
      >
        Clear
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
        {hashValue.length > 0 &&
          hashValue.map((item, ind) => (
            <div style={{ display: "flex", margin: 10 }}>
              <Typography
                style={{
                  transition: "all 0s ease-in",
                  width: 60,
                  marginTop: 10,
                  position: "relative",
                  padding: "5px 10px",
                  backgroundColor:
                    (ind === searchValue % hashSize && searching) ||
                    ind === parseInt(input?.value) % hashSize
                      ? "green"
                      : "white",
                  color:
                    (ind === searchValue % hashSize && searching) ||
                    ind === parseInt(input?.value) % hashSize
                      ? "white"
                      : "black",
                  border: `1px solid ${
                    (ind === searchValue % hashSize && searching) ||
                    ind === parseInt(input?.value) % hashSize
                      ? "green"
                      : "blue"
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
                {item[ind].length > 0 &&
                  item[ind]
                    // .concat(show && input? % hashSize === ind ? [0] : [])
                    .map((value, i) => (
                      <div className={classes.hash}>
                        <Arrow
                          color={
                            value === parseInt(input?.value) &&
                            !input.isInHashTable
                              ? "red"
                              : // : value === parseInt(input?.value)
                                // ? "blue"
                                "black"
                          }
                        />
                        <Typography
                          className={
                            searchValue === value
                              ? classes.box1
                              : searching && classes.box
                          }
                          // color={searchValue === value ? "green" : "black"}
                          style={{
                            width: 60,
                            position: "relative",
                            padding: "5px 10px",
                            backgroundColor:
                              value === parseInt(input?.value) &&
                              !input.isInHashTable
                                ? "red"
                                : value === parseInt(input?.value)
                                ? "blue"
                                : "white",
                            color:
                              (searching &&
                                i <= index &&
                                ind === searchValue % hashSize) ||
                              value === parseInt(input?.value)
                                ? "white"
                                : "black",
                            border: `1px solid ${
                              searchValue === value && i <= index
                                ? "green"
                                : value === parseInt(input?.value) &&
                                  !input.isInHashTable
                                ? "red"
                                : "black"
                            }`,
                            textAlign: "center",
                            // background:
                            //   "linear-gradient(to right, black 50%, white 50%)",
                            backgroundPosition:
                              searching &&
                              i <= index &&
                              ind === searchValue % hashSize
                                ? "left bottom"
                                : "right bottom",
                            // backgroundSize: "200% 100%",
                            transition: `all ${1000 / 1000}s ease-out`,
                          }}
                        >
                          {value}
                          {searchValue === value &&
                            i <= index &&
                            index !== null && (
                              <div
                                style={{
                                  position: "absolute",
                                  width: 50,
                                  height: 50,
                                  // border: "1px solid blue",
                                  right: 5,
                                  top: -10,
                                }}
                              >
                                <TaskAltIcon style={{ color: "green" }} />
                              </div>
                            )}
                        </Typography>
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
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={() => setState({ ...state, open: false })}
        message={state.message}
        key={vertical + horizontal}
      />
      {/* {message != null && <SnackbarMessage message={message} open={true} />} */}
    </div>
  );
};

export default HashTable;
