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
import { makeStyles } from "@mui/styles";
import TextCode from "../../../components/TextCode";
import { Link } from "react-router-dom";
import TagsInput from "../../../components/TagsInput";

const useStyles = makeStyles(() => ({
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
}));

const BubbleSort = () => {
  const classes = useStyles();
  const [list, setList] = useState([10, 7, 5, 1, 2, 6, 4, 8, 9, 3]);
  const [sorting, setSorting] = useState(false);
  const [current, setCurrent] = useState(null);
  const [next, setNext] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [index, setIndex] = useState(null);
  const [length, setLength] = useState(0);
  const [chipData, setChipData] = useState([]);

  const [counter, setCounter] = useState(Date.now());
  const [heigh, setHeight] = useState({
    max: 0,
    min: 0,
  });

  useEffect(() => {
    if (list.length > 0) {
      let max = Math.max(...list);
      let min = Math.min(...list);
      setHeight({
        max,
        min,
      });
    }
  }, [list]);

  // useEffect(() => {
  //   const interval = setInterval(() => setCounter(Date.now()), 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (index < list.length - 1) {
      setCurrent(null);
      setNext(null);
    }
    let counter = count;
    const interval = setInterval(() => {
      if (index != null && index < list.length - 1) {
        setCount((counter) => counter + 1);
        if (list[index] > list[index + 1]) {
          // setTimeout(() => {
          setCurrent(list[index]);
          setNext(list[index + 1]);
          // }, 450);

          setTimeout(() => {
            let arr = [...list];
            arr[index] = list[index + 1];
            arr[index + 1] = list[index];
            setList(arr);
            if (index + length === list.length - 2) {
              setLength(length + 1);
              setIndex(0);
            } else setIndex(index + 1);
          }, 300);
        } else {
          setTimeout(() => {
            setIndex(index + 1);
          }, 300);
        }
        counter++;
      }
    }, 500);
    return () => clearInterval(interval);
  }, [index]);
  // useEffect(() => {
  //   if (index < list.length - 1) {
  //     setCurrent(null);
  //     setNext(null);
  //   }
  //   if (index != null && index < list.length - 1) {
  //     if (list[index] > list[index + 1]) {
  //       setTimeout(() => {
  //         setCurrent(list[index]);
  //         setNext(list[index + 1]);
  //       }, 700);

  //       setTimeout(() => {
  //         let arr = [...list];
  //         arr[index] = list[index + 1];
  //         arr[index + 1] = list[index];
  //         setList(arr);
  //         if (index + length === list.length - 2) {
  //           setLength(length + 1);
  //           setIndex(0);
  //         } else setIndex(index + 1);
  //       }, 1000);
  //     } else {
  //       setTimeout(() => {
  //         setIndex(index + 1);
  //       }, 1000);
  //     }
  //   }
  // }, [index]);

  console.log("Index:", length);
  console.log("List:", list);
  // console.log("next:", next);

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="body1" style={{ fontSize: 30, fontWeight: 700 }}>
        Bubble Sort
      </Typography>
      <Typography variant="body1">
        Bubble sort is a sorting algorithm that compares two adjacent elements
        and swaps them until they are in the intended order.
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

      {/* <h1>Counter: {counter}</h1> */}
      <Button
        variant="outlined"
        // startIcon={<AddIcon />}
        disabled={chipData.length === 0}
        style={{ marginLeft: 10, textTransform: "none", marginTop: 20 }}
        onClick={() => {
          setList([...[...list].concat(chipData)]);
        }}
      >
        Insert
      </Button>
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
                current == item && index === ind && current < next
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
                duration: 0.5,
                ease: "easeOut",
                // delay: parseInt(ind / 2),
              }}
            >
              <Box
                style={{
                  height: (item * 250) / heigh.max,
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
        <Link
          to={"/quiz"}
          state={{ type: "bubbleSort" }}
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" style={{ backgroundColor: "orange" }}>
            Give a Test
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default BubbleSort;