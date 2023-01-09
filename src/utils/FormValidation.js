/* eslint-disable array-callback-return */
import React from "react";
import Toaster from "./Toaster";
import Validation from "./Validation";
// import { Translation } from 'react-i18next';
const FormValidation = {
  validation: async function (fieldList, state) {
    let emptyField = true;
    fieldList.map((data) => {
      try {
        state[data] = state[data].trim();
      } catch (err) {}

      if (
        state[data] === undefined ||
        state[data] === null ||
        state[data] === "" ||
        state[data].length === 0 ||
        (/email/gi.test(data) && !Validation.emailValidation(state[data])) ||
        (/emailId/gi.test(data) && !Validation.emailValidation(state[data])) ||
        (/url/gi.test(data) && !Validation.urlValidation(state[data])) ||
        (/website/gi.test(data) && !Validation.urlValidation(state[data])) ||
        (/mobileNo/gi.test(data) &&
          !Validation.mobileValidation(state[data])) ||
        (/password/gi.test(data) && !Validation.passwordValidation(state[data]))
      ) {
        let classList = document
          .getElementById(data)
          .parentElement.classList.value.split(" ");
        let flag = false;
        classList.map((data) => {
          if (data === "MuiInput-underline") flag = true;
          return null;
        });
        if (flag) {
          document.getElementById(data).parentElement.classList.add("medentry");
        } else {
          document.getElementById(data).classList.add("medentry");
        }

        if (data.includes("email")) {
          emptyField = "email";
        } else if (data === "url" || data === "website") {
          emptyField = "url";
        } else if (data.includes("password")) {
          emptyField = "password";
        } else if (data === "mobileNo") {
          emptyField = "mobileNo";
        } else if (data === "resume") {
          emptyField = "resume";
        } else {
          emptyField = false;
        }
      }
      if (
        state[data] === undefined ||
        state[data] === null ||
        state[data] === "" ||
        state[data].length === 0
      ) {
        emptyField = false;
      }
      return "";
    });
    if (emptyField === false) {
      Toaster.error(
        <div
          style={{
            textAlign: "center",
          }}
          className={"pl-2"}
        >
          Please fill all the mandatory fields
        </div>,
        "topRight"
      );
    } else if (emptyField === "email") {
      Toaster.error(
        <div
          style={{
            textAlign: "center",
          }}
          className={"pl-2"}
        >
          "Please enter a valid email address"
        </div>,
        "topRight"
      );
    } else if (emptyField === "password") {
      Toaster.error(
        <div
          style={{
            textAlign: "center",
          }}
          className={"pl-2"}
        >
          Please enter valid password, Minimum of 8 characters with 1 Uppercase
          and 1 lowercase and 1 special character
        </div>,
        "topRight"
      );
    } else if (emptyField === "url") {
      Toaster.error(
        <div
          style={{
            textAlign: "center",
          }}
          className={"pl-2"}
        >
          Please enter a valid url
        </div>,
        "topRight"
      );
    } else if (emptyField === "mobileNo") {
      Toaster.error(
        <div
          style={{
            textAlign: "center",
          }}
          className={"pl-2"}
        >
          Please enter a valid mobile number.
        </div>,
        "topRight"
      );
    }

    return emptyField;
  },
};
export default FormValidation;
