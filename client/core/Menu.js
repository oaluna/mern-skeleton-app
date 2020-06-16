import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import auth from "./../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname == path) return { color: "#ff4081" };
  else return { color: "#ffffff" };
};
const Menu = withRouter(({ history }) => (
  <AppBar
    position="static"
    style={{
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 200,
      paddingLeft: 60,
      paddingRight: 60
    }}
  >
    <Toolbar>
      <Typography variant="h1" component="h1" color="inherit">
        <h1 className="text-white text-right display-1 py-4">SuperCute~</h1>
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, "/")}>
          <HomeIcon />
        </IconButton>
      </Link>
      <Link to="/about">
        <Button size="large" style={isActive(history, "/about")}>About~</Button>
      </Link>
      <Link to="/users">
        <Button size="large" style={isActive(history, "/users")}>Users~</Button>
      </Link>
      {!auth.isAuthenticated() && (
        <span>
          <Link to="/signup">
            <Button size="large" style={isActive(history, "/signup")}>Sign up~</Button>
          </Link>
          <Link to="/signin">
            <Button size="large" style={isActive(history, "/signin")}>Sign In~</Button>
          </Link>
        </span>
      )}
      {auth.isAuthenticated() && (
        <span>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button size="large"
              style={isActive(
                history,
                "/user/" + auth.isAuthenticated().user._id
              )}
            >
              My Profile~
            </Button>
          </Link>
          <Button size="large"
            color="inherit"
            onClick={() => {
              auth.clearJWT(() => history.push("/"));
            }}
          >
            Sign out~
          </Button>
        </span>
      )}
    </Toolbar>
  </AppBar>
));

export default Menu;
