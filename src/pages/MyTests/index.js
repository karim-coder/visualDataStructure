import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import APIRequest from "../../utils/APIRequest";
import ConfigAPIURL from "../../config/ConfigAPIURL";
import isEmpty from "../../utils/isEmpty";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MyTests = () => {
  const [tests, setTests] = useState([]);
  const getAllTest = () => {
    APIRequest.request("GET", ConfigAPIURL.getAllTest).then((res) => {
      if (!isEmpty(res)) {
        if (res.code === 100) {
          if (res.data.responseCode === 109) {
            // if (location.state === "quiz") {
            // navigate(-1);
            // } else {
            //   navigate("/");
            // }
            setTests(res.data.result);
          }
        }
      }
    });
  };

  useEffect(() => {
    getAllTest();
  }, []);
  return (
    <Container sx={{ mt: 2 }}>
      {/* <Typography>My Tests</Typography>
      {tests.map((item) => (
        <>
          <Typography>
            {item.marksObtained}/{item.totalMark}
          </Typography>
          <Typography>
            {new Date(item.createdAt * 1000).toLocaleTimeString()}{" "}
            {new Date(item.createdAt * 1000).toDateString()}
          </Typography>
          <Typography></Typography>
        </>
      ))} */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Topic Related</TableCell>
              <TableCell align="right">Marks Obtained</TableCell>
              <TableCell align="right">Total Mark</TableCell>
              <TableCell align="right">Date and time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tests.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.category}
                </TableCell>
                <TableCell align="right">{row.marksObtained}</TableCell>
                <TableCell align="right">{row.totalMark}</TableCell>
                <TableCell align="right">
                  {new Date(row.createdAt * 1000).toLocaleTimeString()}{" "}
                  {new Date(row.createdAt * 1000).toDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default MyTests;
