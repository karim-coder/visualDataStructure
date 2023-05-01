import React, { useEffect, useState } from "react";

import { Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import TextCode from "../../../components/TextCode";

const TreeNode = ({ x, y, value }) => (
  <g transform={`translate(${x},${y})`}>
    <circle r="20" fill="white" stroke="black" strokeWidth="2" />
    <text y="8" x="-5" fontSize="16">
      {value}
    </text>
  </g>
);

const TreeLine = ({ x1, y1, x2, y2 }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="1" />
);

const Tree = ({ x, y, node, level = 0, spacing = 120 }) => {
  const { value, leftChild, rightChild } = node;
  const nodeY = y + level * spacing;
  const lineY = nodeY + 20;

  return (
    <g>
      {leftChild && (
        <>
          <TreeLine
            x1={x}
            y1={lineY}
            x2={x - spacing}
            y2={lineY + spacing - 5}
          />
          <Tree
            x={x - spacing}
            y={nodeY + spacing}
            node={leftChild}
            level={level + 1}
            spacing={spacing / 2}
          />
        </>
      )}
      {rightChild && (
        <>
          <TreeLine
            x1={x}
            y1={lineY}
            x2={x + spacing}
            y2={lineY + spacing - 5}
          />
          <Tree
            x={x + spacing}
            y={nodeY + spacing}
            node={rightChild}
            level={level + 1}
            spacing={spacing / 2}
          />
        </>
      )}
      <TreeNode x={x} y={nodeY} value={value} />
    </g>
  );
};

const App = () => {
  const [arr1, setArr1] = useState([7, 2, 9, 4, 5, 3]);
  const [arr2, setArr2] = useState([7, 2, 9, 4, 5, 3]);
  const [arr, setArr] = useState([7, 2, 9, 4, 5, 3]);
  // const [tree, setTree] = useState(null);

  const buildMinHeap = (arr) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  };

  const heapify = (arr, n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  };

  buildMinHeap(arr);

  const buildMaxHeap = (arr) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      maxHeapify(arr, n, i);
    }
  };

  const generateBinaryTree = (arr, index) => {
    if (index >= arr.length) {
      return null;
    }

    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;

    const currentNode = {
      value: arr[index],
      leftChild: generateBinaryTree(arr, leftChildIndex),
      rightChild: generateBinaryTree(arr, rightChildIndex),
    };

    return currentNode;
  };

  const generateSortedLevelBinaryTree = (arr) => {
    if (arr.length === 0) {
      return null;
    }

    const root = { value: arr[0] };
    const queue = [root];

    let i = 1;
    while (i < arr.length) {
      const currentNode = queue.shift();

      // Sort values at current level
      const values = [arr[i]];
      if (i + 1 < arr.length) {
        values.push(arr[i + 1]);
      }
      values.sort((a, b) => a - b);

      // Add left child
      currentNode.leftChild = { value: values[0] };
      queue.push(currentNode.leftChild);
      i++;

      // Add right child
      if (values.length > 1) {
        currentNode.rightChild = { value: values[1] };
        queue.push(currentNode.rightChild);
        i++;
      }
    }

    return root;
  };

  const maxHeapify = (arr, n, i) => {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[left] < arr[smallest]) {
      smallest = left;
    }
    if (right < n && arr[right] < arr[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];

      maxHeapify(arr, n, smallest);
    }
  };
  buildMaxHeap(arr1);
  const minHeap = () => {
    generateBinaryTree(arr1, 0);
  };

  const sortArray = (arr) => {
    const sortedArray = [...arr];
    sortedArray.sort((a, b) => a - b);
    return sortedArray;
  };

  const tree = generateBinaryTree(arr1, 0);
  const maxHeapTree = generateBinaryTree(arr, 0);
  const sortedTree = generateSortedLevelBinaryTree(sortArray([...arr2]));

  const handleGenerateArray = () => {
    const newArray = Array.from(
      { length: Math.floor(Math.random() * 15) + 1 },
      () => Math.floor(Math.random() * 20) + 1
    );
    setArr([...newArray]);
    setArr1([...newArray]);
    setArr2([...newArray]);
  };
  // console.log("Tree: ", tree);
  // console.log("Arr: ", arr1);

  const renderArray = () => {
    return arr2.map((item, index) => (
      <div
        key={index}
        style={{
          marginRight: 5,
          marginLeft: 5,
          height: "50px",
          width: "50px",
          textAlign: "center",
          lineHeight: "50px",
          borderRadius: "5px",
          border: "1px solid #cccccc",
          fontWeight: "bold",
          ease: "easeOut",
          transition: "1s",
          // marginRight: "5px",
        }}
      >
        {item}
      </div>
    ));
  };

  return (
    <div>
      <header>
        <h1>Heap </h1>
      </header>
      <Typography variant="body1">
        A heap is a complete binary tree, and the binary tree is a tree in which
        the node can have utmost two children. Before knowing more about the
        heap data structure, we should know about the complete binary tree.
        <br />
        What is a complete binary tree?
        <br />
        A complete binary tree is a binary tree in which all the levels except
        the last level, i.e., leaf node should be completely filled, and all the
        nodes should be left-justified.
        <br />
        A heap is a specialized tree-based data structure that satisfies the
        heap property. The heap property is defined as either:
        <br />
        1. For a max heap, the value of each node is greater than or equal to
        the values of its children nodes. <br />
        2. For a min heap, the value of each node is less than or equal to the
        values of its children nodes. <br />
        In other words, a heap is a binary tree that satisfies the heap
        property. A binary heap is typically represented as an array where each
        element of the array represents a node in the binary tree. The root of
        the tree is the first element of the array, and for any given element at
        index i, the left child is at index 2i+1 and the right child is at index
        2i+2. Heaps are commonly used for implementing priority queues, which
        are abstract data types that allow efficient insertion and deletion of
        items with associated priorities. The priority of an item in a priority
        queue is typically represented by the value of the item itself.
        <h4>Min Heap</h4>A min heap satisfies the property that the value of
        each node is less than or equal to the values of its children nodes. In
        other words, the minimum value in the heap is always stored at the root
        of the tree.
        <h4>Max Heap</h4>A max heap satisfies the property that the value of
        each node is greater than or equal to the values of its children nodes.
        In other words, the maximum value in the heap is always stored at the
        root of the tree.
      </Typography>

      <button onClick={handleGenerateArray} style={{ marginTop: 20 }}>
        Generate Random Array
      </button>
      {/* <button onClick={minHeap}>Min Heap</button>x */}
      <div style={{ display: "flex", marginTop: 20 }}>{renderArray()}</div>
      <p>Min Heap</p>
      {tree && (
        <svg width="700" height="500">
          <Tree x={400} y={50} node={tree} />
        </svg>
      )}
      <p>Max Heap</p>
      <svg width="700" height="500">
        <Tree x={400} y={50} node={maxHeapTree} />
      </svg>

      <p>Sorted Tree</p>
      <svg width="700" height="500">
        <Tree x={400} y={50} node={sortedTree} />
      </svg>

      <div style={{ display: "flex", marginTop: 20 }}>
        <Typography
          style={{
            fontWeight: 600,
            marginTop: 10,
            borderBottom: "2px solid black",
          }}
        >
          Algorithm
        </Typography>
      </div>

      <TextCode
        code={`Heapify(array, size, i)
        set i as largest
        leftChild = 2i + 1
        rightChild = 2i + 2
        
        if leftChild > array[largest]
          set leftChildIndex as largest
        if rightChild > array[largest]
          set rightChildIndex as largest
      
        swap array[i] and array[largest]
       `}
      />
      <div style={{ display: "flex", marginTop: 20 }}>
        <Typography
          style={{
            fontWeight: 600,
            marginTop: 10,
            borderBottom: "2px solid black",
          }}
        >
          To create max heap
        </Typography>
      </div>

      <TextCode
        code={`MaxHeap(array, size)
        loop from the first index of non-leaf node down to zero
          call heapify
       `}
      />

      <Grid sx={12} style={{ textAlign: "center" }}>
        <Link
          to={"/quiz"}
          state={{ type: "Heap Sort" }}
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

export default App;
