import { Container, Typography } from "@mui/material";
import React from "react";

import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ConfigAPIURL from "../../config/ConfigAPIURL";
import APIRequest from "../../utils/APIRequest";
import isEmpty from "../../utils/isEmpty";

const Profile = () => {
  const [user, setUser] = React.useState({});
  let navigate = useNavigate();
  React.useEffect(() => {
    initializeAuth();
  }, []);
  const initializeAuth = async () => {
    const response = await APIRequest.request(
      "GET",
      ConfigAPIURL.sessionValidation,
      ""
    );

    // setAuthenticated(
    //   !isEmpty(response) &&
    //     response.code === 100 &&
    //     response.data.responseCode === 109
    // );
    if (
      !isEmpty(response) &&
      response.code === 100 &&
      response.data.responseCode === 109
    ) {
      setUser(response.data.user);
    } else {
      setUser(null);
      return <Navigate to="/" replace />;
    }
  };
  if (user === null) {
    navigate("/login");
  }

  return (
    <>
      {user === {} ? (
        <></>
      ) : (
        !isEmpty(user) && (
          <Container sx={{ mt: 2 }}>
            <Typography>Hello, {user.fname + " " + user.lname}</Typography>
          </Container>
        )
      )}
    </>
  );
};

export default Profile;
