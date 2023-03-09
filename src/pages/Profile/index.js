// import { Container, Typography } from "@mui/material";
// import React from "react";

// import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import ConfigAPIURL from "../../config/ConfigAPIURL";
// import APIRequest from "../../utils/APIRequest";
// import isEmpty from "../../utils/isEmpty";

// const Profile = () => {
//   const [user, setUser] = React.useState({});
//   let navigate = useNavigate();
//   React.useEffect(() => {
//     initializeAuth();
//   }, []);
//   const initializeAuth = async () => {
//     const response = await APIRequest.request(
//       "GET",
//       ConfigAPIURL.sessionValidation,
//       ""
//     );

//     // setAuthenticated(
//     //   !isEmpty(response) &&
//     //     response.code === 100 &&
//     //     response.data.responseCode === 109
//     // );
//     if (
//       !isEmpty(response) &&
//       response.code === 100 &&
//       response.data.responseCode === 109
//     ) {
//       setUser(response.data.user);
//     } else {
//       setUser(null);
//       return <Navigate to="/" replace />;
//     }
//   };
//   if (user === null) {
//     navigate("/login");
//   }

//   return (
//     <>
//       {user === {} ? (
//         <></>
//       ) : (
//         !isEmpty(user) && (
//           <Container sx={{ mt: 2 }}>
//             <Typography>Hello, {user.fname + " " + user.lname}</Typography>
//           </Container>
//         )
//       )}
//     </>
//   );
// };

// export default Profile;

import { Box, Slider } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./styles.css";

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

function Profile() {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(300);
  const [index, setIndex] = useState(null);
  const [index1, setIndex1] = useState(null);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < 20; i++) {
      newArray.push(Math.floor(Math.random() * 350) + 1);
    }
    setArray(newArray);
  };

  const insertionSort = async () => {
    for (let i = 1; i < array.length; i++) {
      let currentVal = array[i];
      setIndex1(i);
      let j;
      for (j = i - 1; j >= 0 && array[j] > currentVal; j--) {
        console.log(animationSpeed);
        array[j + 1] = array[j];
        setIndex(j + 1);
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
        array[j] = [currentVal];
        setArray([...array]);
      }
      setIndex(null);
      array[j + 1] = currentVal;
      await new Promise((resolve) => setTimeout(resolve, animationSpeed));
      setArray([...array]);
    }
  };
  // let animationName = `animation${Math.round(Math.random() * 100)}`;
  // let left = `
  //   @-webkit-keyframes ${animationName} {
  //       10% {-webkit-transform:translate(${Math.random() * 300}px, ${
  //   Math.random() * 300
  // }px)}
  //       90% {-webkit-transform:translate(${Math.random() * 300}px, ${
  //   Math.random() * 300
  // }px)}
  //       100% {-webkit-transform:translate(${Math.random() * 300}px, ${
  //   Math.random() * 300
  // }px)}
  //   }`;

  return (
    <div className="App">
      <header>
        <h1>Insertion Sort Animation</h1>
      </header>
      <main>
        <div className="array-container">
          {array.map((value, idx) => (
            <div>
              <div
                className="array-bar"
                key={idx}
                style={{
                  height: `${value}px`,
                  backgroundColor:
                    idx === index ? "red" : idx <= index1 ? "green" : "black",
                  // animationName: idx === index ? "left" : "",
                  animation:
                    idx === index
                      ? `right ${animationSpeed / 1000}s`
                      : idx === index - 1
                      ? `left ${animationSpeed / 1000}s`
                      : "",
                  position: "relative",
                  // idx === index ? "right" : idx === index - 1 ? "left" : "",
                  ease: "easeOut",
                  // animationDuration: "1s",

                  // animationIterationCount: 1,
                  // animationDirection: "normal",
                  // animationFillMode: "forwards",
                }}
              ></div>
              <p
                style={{
                  animation:
                    idx === index
                      ? `right ${animationSpeed / 1000}s`
                      : idx === index - 1
                      ? `left ${animationSpeed / 1000}s`
                      : "",
                  position: "relative",
                  // idx === index ? "right" : idx === index - 1 ? "left" : "",
                  ease: "easeOut",
                  textAlign: "center",
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button onClick={generateArray}>Generate New Array</button>
          <button onClick={insertionSort}>Insertion Sort</button>
          <label htmlFor="animationSpeed">Animation Speed:</label>
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Restricted values"
              // defaultValue={1000}
              max={1500}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              onChange={(e) => setAnimationSpeed(e.target.value)}
              step={null}
              valueLabelDisplay="auto"
              marks={marks}
            />
          </Box>
          <input
            type="range"
            min="1"
            max="1000"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(e.target.value)}
            id="animationSpeed"
          />
        </div>
      </main>
    </div>
  );
}

export default Profile;
