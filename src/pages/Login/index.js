import React, { useState } from "react";
import { Button, Grid, OutlinedInput, Paper, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { Link, useNavigate, useLocation } from "react-router-dom";
import APIRequest from "../../utils/APIRequest";
import ConfigAPIURL from "../../config/ConfigAPIURL";
import isEmpty from "../../utils/isEmpty";
import FormValidation from "../../utils/FormValidation";
import { connect, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultForm = {
  email: "",
  password: "",
};

const Login = (props) => {
  const [form, setForm] = useState(defaultForm);
  let navigate = useNavigate();
  let location = useLocation();

  console.log("Location", location);

  const dispatch = useDispatch();

  const notify = () => toast("Wow so easy !");

  const sendToServer = () => {
    const fieldValidation = ["email", "password"];

    FormValidation.validation(fieldValidation, form).then((validation) => {
      if (validation === true) {
        login();
      }
    });
  };

  const login = () => {
    APIRequest.request("POST", ConfigAPIURL.login, JSON.stringify(form)).then(
      (res) => {
        if (!isEmpty(res)) {
          if (res.code === 100) {
            if (res.data.responseCode === 109) {
              dispatch({
                type: "UPDATE_USER",
                value: res.data.user,
              });
              if (location.state === "quiz") {
                navigate(-1);
              } else {
                navigate("/");
              }
            }
            if (res.data.responseCode === 103) {
              setForm(defaultForm);
              // SnackbarUtils.error(
              //   props.t("forms.wrongMobileNo"),
              //   "bottomCenter",
              //   3000
              // ).then((notification) => props.publishNotification(notification));
            }
          }
        }
      }
    );
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
          <Grid item xs={10}>
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
          <Grid item xs={10}>
            <TextField
              id="password"
              type={"password"}
              // step={"1"}
              required
              label={"password"}
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
            Login
          </Button>

          <div>
            <button onClick={notify} style={{ display: "none" }}>
              Notify!
            </button>
            <ToastContainer />
          </div>

          <Grid
            container
            sx={{ justifyContent: "center", mb: 2, mt: 1, pl: 1 }}
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
              sm={5}
              sx={{
                mt: 2,
                height: 9,
                color: "#767676",
              }}
            >
              Don't have an account
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
            <Link to={"/signup"}>Sign up</Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default connect()(Login);
