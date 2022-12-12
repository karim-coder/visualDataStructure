import {
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./style.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Snackbar from "@mui/material/Snackbar";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const defaultValue = {
  input: null,
  location: null,
  operationType: null,
  button: null,
};

const Queue = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const [inserting, setInserting] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [pushing, setPushing] = useState(false);
  const [show, setShow] = useState(false);
  const [peak, setPeak] = useState(null);

  const [index, setIndex] = useState(null);
  const [number, setNumber] = useState({
    input: null,
    location: null,
    operationType: null,
    button: null,
  });

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <Typography
        variant="body1"
        style={{ fontSize: 30, fontWeight: 700, textAlign: "center" }}
      >
        Queue
      </Typography>

      <Typography variant="body1" style={{ fontSize: 18, marginTop: 20 }}>
        A queue is a linear data structure that stores the elements
        sequentially. It uses the FIFO approach (First In First Out) for
        accessing elements. Queues are typically used to manage threads in
        multithreading and implementing priority queuing systems. In this
        article, we will learn about different types of queue data structure,
        basic operations performed on it, implementation, and queue
        applications. <br />A queue is an important data structure in
        programming. A queue follows the FIFO (First In First Out) method and is
        open at both of its ends. Data insertion is done at one end rear end or
        the tail of the queue while deletion is done at the other end called the
        front end or the head of the queue.
      </Typography>

      {/* <Grid container xl={12} lg={12} md={12} sm={12} xs={12}> */}
      <Grid xl={12} lg={12} md={12} sm={12} xs={12} style={{ marginTop: 20 }}>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          style={{ marginRight: 10, textTransform: "none" }}
          onClick={() => {
            setNumber({
              input: "",
              location: null,
              button: "Insert",
              operationType: "insertAtLast",
            });
            setX(0);
            setY(0);
            setPeak(null);
          }}
        >
          Enqueue
        </Button>

        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          style={{ marginRight: 10, textTransform: "none" }}
          onClick={() => {
            setNumber({
              input: null,
              location: "",
              button: null,
              operationType: "deleteFromStart",
            });
            setInserting(true);
            let num = [...list];
            num.shift(number.input);
            // setList(num);
            setTimeout(() => {
              setInserting(false);
              setList(num);
            }, 1000);
            setX(0);
            setY(0);
            setPeak(null);
          }}
        >
          Dequeue
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          style={{ marginRight: 10, textTransform: "none" }}
          onClick={() => {
            setPeak(list[list.length - 1]);
          }}
        >
          Peak
        </Button>
      </Grid>

      <Grid
        xl={12}
        container
        style={{ marginTop: 10, opacity: number.input !== null ? 1 : 0 }}
      >
        <Grid>
          {number.input !== null && (
            <TextField
              size="small"
              type="number"
              label="Value"
              style={{ width: 150, marginRight: 20 }}
              value={number.input}
              onChange={(e) => {
                setNumber({
                  ...number,
                  input: parseInt(e.target.value),
                });
              }}
            />
          )}
          {number.location !== null && (
            <TextField
              size="small"
              type="number"
              label="Location"
              style={{ width: 150, marginRight: 20 }}
              value={number.location}
              onChange={(e) => {
                setNumber({
                  ...number,
                  location: parseInt(e.target.value),
                });
              }}
            />
          )}
        </Grid>
        <Stack
          direction={"row"}
          spacing={3}
          style={{ textAlign: "center", alignItems: "center" }}
        >
          <Button
            variant="contained"
            onClick={() => {
              switch (number.operationType) {
                case "insertAtStart":
                  {
                    let num = [...list];
                    num.unshift(number.input);

                    setInserting(true);
                    setY(80.8);
                    setTimeout(() => {
                      setInserting(false);
                      setList(num);
                      setNumber(defaultValue);
                    }, 1000);
                  }
                  break;
                case "insertAtLast":
                  {
                    let num = [...list];
                    num.push(number.input);
                    setInserting(true);
                    setX((num.length - 1) * 161.3);

                    setTimeout(() => {
                      setY(80.8);
                    }, 800);
                    setTimeout(() => {
                      setInserting(false);
                      setList(num);
                      setNumber(defaultValue);
                      setY(0);
                    }, 1500);
                    // setList(num);
                    // setNumber(defaultValue);
                  }
                  break;
                case "insertAt":
                  {
                    let num = [...list];
                    // num.push(number.input);
                    setInserting(true);
                    let ind = num.indexOf(number.location);
                    setIndex(ind);
                    setX(ind * 157.3);
                    setTimeout(() => {
                      setY(80.8);
                    }, 900);
                    setTimeout(() => {
                      num.splice(ind, 0, number.input);
                      setInserting(false);
                      setY(0);
                      setList(num);
                      // setX(0);
                      // setY(0);
                      setNumber(defaultValue);
                    }, 1500);
                  }
                  break;
                case "deleteFromMiddle":
                  {
                    let num = [...list];
                    var index = num.indexOf(number.input);
                    setIndex(index);
                    setInserting(true);
                    if (index !== -1) {
                      num.splice(index, 1);
                    }
                    // setList(num);

                    setTimeout(() => {
                      setInserting(false);
                      setList(num);
                    }, 1000);
                  }
                  break;
              }
            }}
          >
            {number.button}
          </Button>
          <IconButton
            style={{ marginLeft: 10 }}
            onClick={() => {
              setNumber({
                input: null,
                location: null,
                operationType: null,
                button: null,
              });
            }}
          >
            <CloseIcon style={{ color: "red" }} />
          </IconButton>
        </Stack>
      </Grid>
      {/* )} */}

      {/* )} */}

      {/* {show && ( */}

      <Grid
        xl={12}
        style={{
          opacity: number.input === null || number.input === "" ? 0 : 1,
        }}
      >
        <div style={{ width: "auto", maxWidth: 200 }}>
          <motion.div
            style={{
              marginTop: 20,

              display: "flex",
              alignItems: "center",
            }}
            animate={
              number.operationType === "insertAt"
                ? inserting
                  ? {
                      x,
                      y,
                      opacity: 1,
                    }
                  : {}
                : number.operationType === "insertAtStart"
                ? inserting
                  ? {
                      x,
                      y,
                      opacity: 1,
                    }
                  : {}
                : number.operationType === "insertAtLast"
                ? inserting
                  ? {
                      x,
                      y,
                    }
                  : {}
                : {}
            }
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <span
              style={{
                position: "relative",
                border: "2px solid #004e9a",
                borderRightWidth: 0,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                // backgroundColor: "#004e9a",
                // color: "white",
                padding: "5px 10px",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <LocationOnIcon />
            </span>
            <Typography
              style={{
                position: "relative",
                padding: "7.3px 20px",
                margin: 0,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                // backgroundColor: "#004e9a",
                // color: "white",
                border: "2px solid #004e9a",
                textAlign: "center",
                alignItems: "center",
                maxWidth: 40,
                width: 40,
              }}
            >
              {number.input == null ? "" : number.input}
            </Typography>
            {/* ----{">"} */}
          </motion.div>
        </div>
      </Grid>

      <Box
        style={{
          marginTop: 30,
          display: "flex",
          // border: "1px solid red",
        }}
      >
        {list.concat([-1]).map((item, ind) => (
          <motion.div
            animate={
              number.operationType === "insertAt" && inserting
                ? index !== null && ind + 1 > index
                  ? {
                      x: 157.3,
                      // transitionEnd: {
                      //   display: "none",
                      // },
                    }
                  : {}
                : number.operationType === "insertAtStart" && inserting
                ? { x: 157.3 }
                : number.operationType === "insertAtLast" && inserting
                ? ind === list.length && {
                    x: 157.3,
                  }
                : number.operationType === "deleteFromStart" && inserting
                ? ind === 0
                  ? {
                      opacity: 0,
                      y: 100,
                    }
                  : {
                      // transition: {
                      //   duration: 1,
                      //   delay: 0.5,
                      // },
                      x: -157.3,
                    }
                : number.operationType === "deleteFromLast" && inserting
                ? ind === list.length - 1
                  ? {
                      opacity: 0,
                      y: 100,
                    }
                  : ind === list.length && {
                      x: -157.3,
                      // transition: {
                      //   duration: 1,
                      //   delay: 0.5,
                      // },
                    }
                : number.operationType === "deleteFromMiddle" &&
                  index !== null &&
                  inserting
                ? ind === index
                  ? {
                      y: 100,
                      opacity: 0,
                      // display: "none",
                    }
                  : ind > index
                  ? {
                      x: -157.3,
                    }
                  : ind === list.length && {
                      x: -157.3,
                      // transition: {
                      //   duration: 1,
                      //   delay: 0.5,
                      // },
                    }
                : {}
            }
            transition={{ ease: "easeOut", duration: inserting ? 1.2 : 0 }}
          >
            <div
              style={{
                textAlign: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              {ind !== list.length ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      // border: "1px solid black",
                      borderRight: 0,
                      padding: "5px 10px",
                      background:
                        peak === item &&
                        `linear-gradient(250deg, #f107a3, #7b2ff7)`,
                      border: "2px solid #004e9a",

                      color: peak === item && "white",
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                  >
                    <LocationOnIcon />
                  </span>
                  <Typography
                    style={{
                      padding: "7.3px 20px",
                      margin: 0,
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                      background:
                        peak === item &&
                        `linear-gradient(250deg, #7b2ff7, #f107a3)`,
                      color: peak === item && "white",
                      border: "2px solid #004e9a",
                      borderLeft: "1px solid white",
                      maxWidth: 40,
                      width: 40,
                    }}
                  >
                    {item}
                  </Typography>
                  <span
                    style={{
                      color: `linear-gradient(250deg, #7b2ff7, #f107a3)`,
                      display: ind === list.length - 1 ? "none" : "",
                    }}
                  >
                    ----{">"}
                  </span>
                </div>
              ) : (
                <></>
              )}
            </div>
          </motion.div>
        ))}
      </Box>
      <Typography style={{ marginTop: 100, fontSize: 20, fontWeight: 600 }}>
        Real Life example of a queue data structure
      </Typography>
      <Typography style={{ marginTop: 20, fontSize: 18 }}>
        Let’s consider a line of people waiting to buy a ticket at a cinema
        hall. A new person will join the line from the end and the person
        standing at the front will be the first to get the ticket and leave the
        line. Similarly in a queue data structure, data added first will leave
        the queue first.
        <br />
        <br />
        Some other applications of the queue in real-life are:
        <ul>
          <li>People on an escalator</li>
          <li>Cashier line in a store</li>
          <li>A car wash line</li>
          <li>One way exits</li>
        </ul>
      </Typography>
      {/* </Grid> */}

      {/* <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={state.message}
        key={vertical + horizontal}
      /> */}
    </div>
  );
};

export default Queue;
