import React, { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Array from "../dataStructure/array";
import Stack from "../dataStructure/stack";
import Queue from "../dataStructure/queue";
import LinkedList from "../dataStructure/linkedList";
import InsertionSort from "../dataStructure/insertionSort";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CourseContentRouting = () => {
  // let location = useLocation();
  // let navigate = useNavigate();
  // let params = useParams();
  // return <Component {...props} router={{ location, navigate, params }} />;
  return (
    <Routes>
      <Route
        exact
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <h1>Courses</h1>
          </Suspense>
        }
      />
      <Route
        exact
        path="array"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Array />
          </Suspense>
        }
      />
      <Route
        exact
        path="stack"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Stack />
          </Suspense>
        }
      />
      <Route
        exact
        path="queue"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Queue />
          </Suspense>
        }
      />
      <Route
        exact
        path="linked-list"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LinkedList />
          </Suspense>
        }
      />
      <Route
        exact
        path="insertion-sort"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <InsertionSort />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default CourseContentRouting;
