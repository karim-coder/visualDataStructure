import React from "react";
import {
  Container,
  Box,
  Grid,
  Avatar,
  Typography,
  Divider,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TodayIcon from "@mui/icons-material/Today";
import GradingIcon from "@mui/icons-material/Grading";
import GradeIcon from "@mui/icons-material/Grade";
import APIRequest from "../../utils/APIRequest";
import ConfigAPIURL from "../../config/ConfigAPIURL";
import isEmpty from "../../utils/isEmpty";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

function UserProfile() {
  const [profile, setProfile] = React.useState([]);
  React.useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    APIRequest.request("GET", ConfigAPIURL.profile, "").then((res) => {
      if (!isEmpty(res)) {
        if (res.code === 100) {
          if (res.data.responseCode === 109) {
            setProfile(res.data.result);
          }
        }
      }
    });
  };

  const user = useSelector((store) => store.user);

  const formatDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    const options = { month: "short", day: "2-digit", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 5 }}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar
              alt="User Profile Picture"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              sx={{ width: 120, height: 120 }}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h4" gutterBottom fontFamily="Roboto">
                  {user.fname} {user.lname}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PhoneIcon />
                  <Typography variant="body1" gutterBottom fontFamily="Roboto">
                    123-456-7890
                    {/* {user.mobileNo.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")} */}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <EmailIcon />
                  <Typography variant="body1" fontFamily="Roboto">
                    {user.email}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mb: 5 }}>
        <Divider />
      </Box>

      <Grid item xs={12} sm={6}>
        <Card sx={{ minWidth: 275, mb: 2 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Passed Tests
            </Typography>

            <Box>
              {profile &&
                profile.length > 0 &&
                profile.map((item) => (
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <CheckCircleIcon sx={{ mr: 1, color: "green" }} />
                    <Typography
                      variant="body1"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {item._id}
                    </Typography>
                    <Box
                      sx={{ ml: "auto", display: "flex", alignItems: "center" }}
                    >
                      <TodayIcon sx={{ mr: 0.5 }} fontSize="small" />
                      <Typography variant="body2" style={{ width: 110 }}>
                        {formatDate(item.createdAt)}
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 2, display: "flex", alignItems: "center" }}>
                      <GradeIcon sx={{ mr: 0.5 }} fontSize="small" />
                      <Typography variant="body2">
                        {(item.marksObtained / item.totalMark) * 100}
                      </Typography>
                    </Box>
                  </Box>
                ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default connect()(UserProfile);
