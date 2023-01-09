import React, { useState } from "react";
import { Button, Grid, OutlinedInput, Paper, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";

import APIRequest from "../../utils/APIRequest";
import ConfigAPIURL from "../../config/ConfigAPIURL";
import isEmpty from "../../utils/isEmpty";
import FormValidation from "../../utils/FormValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultForm = {
  fname: "",
  lname: "",
  // mobileNo: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [form, setForm] = useState(defaultForm);

  let navigate = useNavigate();

  const notify = () => toast("Wow so easy !");

  const SignUp = () => {
    console.log(JSON.stringify(form));
    APIRequest.request("POST", ConfigAPIURL.signUp, JSON.stringify(form)).then(
      (res) => {
        if (!isEmpty(res)) {
          console.log(res);
          if (res.code === 100) {
            if (res.data.responseCode === 109) {
              navigate("/login", { replace: true });
              // SnackbarUtils.success(
              //   "Your account created successfully!",
              //   "bottomCenter",
              //   3000
              // ).then((notification) => props.publishNotification(notification));
            }
            if (res.data.responseCode === 114) {
              // SnackbarUtils.warn(
              //   "You are already registered. Please log in.",
              //   "bottomCenter",
              //   3000
              // ).then((notification) => props.publishNotification(notification));
              setForm(form);
            }
          }
        }
      }
    );
  };

  const sendToServer = () => {
    const fieldValidation = ["fname", "lname", "email", "password"];

    FormValidation.validation(fieldValidation, form).then((validation) => {
      if (validation === true) {
        console.log("Okay");
        SignUp();
      }
    });
  };
  return (
    <Container maxWidth="xs">
      <Paper
        elevation={2}
        sx={{
          mt: 5,
          p: 3,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid item xl={6} xs={12}>
            <TextField
              id="fname"
              label="First Name"
              value={form.fname}
              required
              onChange={(e) => {
                setForm({
                  ...form,
                  fname: e.target.value,
                });
              }}
              fullWidth
            />
          </Grid>

          <Grid item xl={6} xs={12}>
            <TextField
              id="lname"
              label="Last Name"
              value={form.lname}
              required
              onChange={(e) => {
                setForm({
                  ...form,
                  lname: e.target.value,
                });
              }}
              fullWidth
            />
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              id="mobileNo"
              type={"number"}
              // step={"1"}
              sx={{
                "& input[type=number]": {
                  MozAppearance: "textfield",
                },
                "& input[type=number]::-webkit-outer-spin-button": {
                  WebkitAppearance: "none",
                  margin: 0,
                },
                "& input[type=number]::-webkit-inner-spin-button": {
                  WebkitAppearance: "none",
                  margin: 0,
                },
              }}
              label={"Mobile No"}
              required
              // placeholder="Enter your mobile number."
              value={form.mobileNo}
              onKeyPress={(event) => {
                return event.charCode >= 48 && event.charCode <= 57
                  ? event
                  : event.preventDefault();
              }}
              onChange={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 10);
                setForm({
                  ...form,
                  mobileNo: e.target.value,
                });
              }}
              fullWidth
            />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email"
              required
              value={form.email}
              onChange={(e) => {
                setForm({
                  ...form,
                  email: e.target.value,
                });
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              type={"password"}
              // step={"1"}
              required
              label={"Password"}
              // placeholder="Enter your password."
              value={form.password}
              onChange={(e) => {
                setForm({
                  ...form,
                  password: e.target.value,
                });
              }}
              fullWidth
            />
          </Grid>

          <Button
            variant="contained"
            style={{ marginTop: 20 }}
            onClick={sendToServer}
          >
            Sign Up
          </Button>

          <div>
            <button onClick={notify} style={{ display: "none" }}>
              Notify!
            </button>
            <ToastContainer />
          </div>

          <Grid
            container
            sx={{ justifyContent: "space-evenly", mb: 2, mt: 1, pl: 1 }}
          >
            <Grid
              item
              xs={2}
              sm={3}
              sx={{
                borderBottom: 1,
                borderColor: "#ccc",
              }}
            ></Grid>
            <Grid
              item
              xs={7}
              sm={6}
              sx={{
                mt: 2,
                height: 9,
                color: "#767676",
                textAlign: "center",
              }}
            >
              Already have an account
            </Grid>
            <Grid
              item
              xs={2}
              sm={3}
              sx={{
                borderBottom: 1,
                borderColor: "#ccc",
              }}
            ></Grid>
          </Grid>
          <Grid
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{ textAlign: "center" }}
          >
            <Link to={"/login"}>Login</Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Signup;
