import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { motion, AnimatePresence } from "framer-motion";

const InsertionSort = () => {
  const [list, setList] = useState([10, 7, 5, 1, 2, 6, 4, 8, 9, 3]);
  const [sorting, setSorting] = useState(false);
  const [current, setCurrent] = useState(null);
  const [next, setNext] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [index, setIndex] = useState(null);
  const [length, setLength] = useState(0);

  const [counter, setCounter] = useState(Date.now());

  // useEffect(() => {
  //   const interval = setInterval(() => setCounter(Date.now()), 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(() => {
    // setCurrent([list[index]]);
    // setNext(list[index + 1]);
    if (index < list.length - 1) {
      setCurrent(null);
      setNext(null);
    }
    if (index != null && index < list.length - 1) {
      if (list[index] > list[index + 1]) {
        // setSorting(true);

        setTimeout(() => {
          setCurrent(list[index]);
          setNext(list[index + 1]);
        }, 700);

        // let arr = [...list];
        // arr[index] = list[index + 1];
        // arr[index + 1] = list[index];
        // setList(arr);

        setTimeout(() => {
          // console.log("Okay :", length, index, list.length);

          let arr = [...list];
          arr[index] = list[index + 1];
          arr[index + 1] = list[index];
          setList(arr);
          if (index + length === list.length - 2) {
            setLength(length + 1);
            setIndex(0);
            // setCurrent(null);
            // setNext(null);
          } else setIndex(index + 1);
        }, 1000);
      } else {
        setTimeout(() => {
          setIndex(index + 1);
          // setSorting(false);
          // setNext(index + 2);
          // setCurrent(index + 1);
        }, 1000);
      }
    }
  }, [index]);

  console.log("Index:", length);
  console.log("List:", list);
  // console.log("next:", next);

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="body1" style={{ fontSize: 30, fontWeight: 700 }}>
        Insertion Sort
      </Typography>
      <Typography variant="body1">
        The working procedure of bubble sort is simplest. This article will be
        very helpful and interesting to students as they might face bubble sort
        as a question in their examinations. So, it is important to discuss the
        topic.
        <br />
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
      <Button
        variant="outlined"
        // startIcon={<AddIcon />}
        style={{ marginRight: 10, textTransform: "none", marginTop: 20 }}
        onClick={() => {
          setIndex(0);
          setLength(0);
          setX(0);
          setY(0);
        }}
      >
        Sort
      </Button>
      <Typography>Round-{length}</Typography>
      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ alignItems: "end", marginTop: 20 }}
      >
        {list.map((item, ind) => (
          <>
            <motion.div
              // layout
              animate={
                // list[index + 1] < item && index + 1 === ind
                //   ? // list[index + 1] > list[index]
                //     {
                //       x: 35,
                //     }
                //   : index && list[index + 1] === item && index + 1 === ind
                //   ? {
                //       x: -35,
                //     }
                //   : {}
                current == item && index + 1 === ind
                  ? {
                      x: 35,
                    }
                  : next == item && current > next && index + 1 === ind
                  ? {
                      x: -35,
                    }
                  : {}

                // ind % 2 === 0
                //   ? {
                //       x: 35,
                //     }
                //   : ind % 2 !== 0
                //   ? {
                //       x: -35,
                //     }
                //   : {}
              }
              transition={{
                // opacity: { ease: "easeOut" },
                // layout: { duration: 1 },
                duration: 1,
                ease: "easeOut",
                // delay: parseInt(ind / 2),
              }}
            >
              <Box
                style={{
                  height: item * 25,
                  width: 25,

                  background:
                    list[index] === item && ind === index
                      ? "red"
                      : index !== null &&
                        list[index + 1] === item &&
                        index + 1 === ind
                      ? "green"
                      : ind >= list.length - length
                      ? "purple"
                      : "blue",
                  marginRight: 10,

                  color: "white",
                  textAlign: "center",
                }}
              >
                {item}
              </Box>
              {/* <Typography>{item}</Typography> */}
            </motion.div>
          </>
        ))}
      </Grid>
    </div>
  );
};

export default InsertionSort;
