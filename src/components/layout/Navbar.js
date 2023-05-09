import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import APIRequest from "../../utils/APIRequest";
import ConfigAPIURL from "../../config/ConfigAPIURL";
import isEmpty from "../../utils/isEmpty";
import { useDispatch, useSelector } from "react-redux";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./styles.css";
import {
  Collapse,
  Drawer,
  Hidden,
  Snackbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Alert,
} from "@mui/material";
import LanguageConfig from "../../config/LanguageConfig";
import { withTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import TranslateIcon from "@mui/icons-material/Translate";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles((theme) => ({
  adminRoot: {
    display: "flex",
    // zoom: '85%',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    position: "relative",
    height: "100%",
    width: "calc(100% - 250px)",
  },
  contentDesktop: {
    flexGrow: 1,
    padding: theme.spacing(1),
    position: "relative",
    height: "100%",
    width: "calc(100% - 250px)",
  },
  background: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    background: theme.palette.background.default,
  },
  backgroundColor: {
    height: "400px",
    backgroundImage: theme.custom.containerColor,
    backgroundAttachment: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    position: "absolute",
  },
  backgroundImage: {
    left: "-2px",
    width: "100%",
    bottom: "-32px",
    position: "absolute",
    height: "auto",
    transform: "scale(1.1,0.8)",
    transformOrigin: "bottom",
  },
  backgroundImageMobile: {
    width: "100%",
    bottom: "-25px",
    position: "absolute",
    height: "auto",
    transformOrigin: "bottom",
  },
  textLimit: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  menuStyle: {
    // color: theme.custom.sideDrawer.menuColor,
    backgroundColor: theme.palette.primary.main,
    // opacity: 0.9,
    padding: 5,
    borderRadius: 5,
    color: "black",
    width: "100%",
    height: "100%",
    color: "white",
  },
  drawerPaper: {
    height: "auto",
    minHeight: 150,
    maxHeight: 300,
    overflowY: "auto",
  },
  nested: {
    // paddingLeft: theme.spacing(9),
    // backgroundColor: "blue",
  },
}));

const pages = ["courses", "about"];
const courses = ["Data Structures", "Sorting Algorithm", "Searching Algorithm"];

const Navbar = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuStatus, setMenuStatus] = React.useState({ language: false });

  const user = useSelector((store) => store.user);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [languageList, setLanguageList] = React.useState([]);

  useEffect(() => {
    LanguageConfig.languageList().then((lngList) => {
      setLanguageList(lngList);
    });
    props.i18n.changeLanguage(props.languageData.code);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    // setAnchorElUser(event.currentTarget);
    navigate("/course/stack");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const logout = () => {
    APIRequest.request("GET", ConfigAPIURL.logout).then((res) => {
      if (!isEmpty(res)) {
        if (res.code === 100) {
          if (res.data.responseCode === 109) {
            dispatch({
              type: "UPDATE_USER",
              value: null,
            });
            navigate("/login", { replace: true });
          }
        }
      }
    });
    handleMenuClose();
  };

  const languageChange = (data) => {
    props.i18n.changeLanguage(data.code);
    props.languageChange(data);
    setMenuStatus({ language: false });
    localStorage.setItem("lng", JSON.stringify(data));
    handleLanguageMenuClose();
  };
  const [languageDropdown, setLanguageDropdown] = React.useState(null);
  const handleLanguageMenuClick = (event) => {
    setLanguageDropdown(event.currentTarget);
  };
  const handleLanguageMenuClose = () => {
    setLanguageDropdown(null);
  };
  const LanguageList = () => {
    return languageList.map((lng, lngIndex) => (
      <Collapse
        in={menuStatus["language"] ? menuStatus["language"] : false}
        timeout="auto"
        unmountOnExit
        key={lngIndex}
      >
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            selected={
              lng.displayName === props.languageData.displayName ? true : false
            }
            onClick={() => languageChange(lng)}
          >
            <Tooltip title={lng.displayName}>
              <ListItemText
                className={[classes.textLimit, classes.menuStyle]}
                primary={lng.displayName}
              />
            </Tooltip>
          </ListItem>
        </List>
      </Collapse>
    ));
  };
  console.log("Lang: ", menuStatus);

  const isMenuOpen = Boolean(anchorEl);
  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleMenuClose();
          navigate("/profile", { replace: true });
        }}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          navigate("/my-tests", { replace: true });
        }}
      >
        My Tests
      </MenuItem>
      <MenuItem onClick={logout}>
        {/* <IconButton
          size="small"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LogoutIcon />
        </IconButton> */}
        Logout
        {/* {props.t("topNavBar.logout")} */}
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xxl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}>
              <Link
                to="/"
                style={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: 15,
                }}
              >
                Logo
              </Link>
            </Box>

            <List
              style={{
                position: "absolute",
                left: "50%",
                top: 5,
                color: "white",
              }}
            >
              <ListItem
                button
                key={1}
                onClick={() =>
                  setMenuStatus({
                    ...menuStatus,
                    language: !menuStatus["language"],
                  })
                }
              >
                <ListItemIcon>
                  <TranslateIcon style={{ color: "white" }} />
                </ListItemIcon>
                <Tooltip title={props.t("topNavBar.language")}>
                  <ListItemText
                    className={classes.menuStyle}
                    primary={
                      props.languageData !== undefined &&
                      props.languageData !== null
                        ? props.t("topNavBar.language") +
                          " ( " +
                          props.languageData.displayName +
                          " ) "
                        : props.t("topNavBar.language") + " ( English ) "
                    }
                  />
                </Tooltip>
                {menuStatus["language"] ? <ExpandMore /> : <ExpandLess />}
              </ListItem>
              <LanguageList />
            </List>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      {props.t(`dashboard.${page}`)}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {props.t(`dashboard.login`)}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Box sx={{ flexGrow: 0 }}>
                <Button
                  onClick={handleOpenUserMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {props.t(`dashboard.courses`)}
                </Button>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {courses.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {props.t(`dashboard.about`)}
              </Button>
            </Box>
            {user === {} ? (
              <></>
            ) : !isEmpty(user) ? (
              <IconButton
                size="large"
                edge="end"
                aria-haspopup="true"
                aria-label="account of current user"
                aria-controls={menuId}
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle
                // sx={{ color: (theme: any) => theme.palette.secondary.main }}
                />
              </IconButton>
            ) : (
              <Button color="inherit" onClick={() => navigate("/login")}>
                {props.t(`dashboard.login`)}
              </Button>
            )}

            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open courses">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {courses.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

// export default connect()(Navbar);

// export default withTranslation("translations")(connect()(Navbar));

const mapStateToProps = (state) => {
  return {
    languageData: state.languageData,
  };
};
const mapDispachToProps = (dispatch) => {
  return {
    languageChange: (languageData) =>
      dispatch({ type: "LANGUAGE", value: languageData }),
  };
};

export default withTranslation("translations")(
  connect(mapStateToProps, mapDispachToProps)(Navbar)
);
