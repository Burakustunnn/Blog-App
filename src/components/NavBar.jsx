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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthCall from "../hooks/useAuthCall";

const pages = [
  {
    title: "DASHBOARD",
    url: "/",
  },
  {
    title: "NEW BLOG",
    url: "/newblog",
  },
  {
    title: "ABOUT",
    url: "/about",
  },
];
const settings = [
  { title: "Profile", url: "/profile" },
  { title: "My Blogs", url: "/myblogs" },
  { title: "LOGOUT", url: "/" },
];
const settingPublic = [
  { title: "LOGİN", url: "/login" },
  { title: "REGİSTER", url: "/register" },
];
function NavBar() {
  const { currentUser } = useSelector((state) => state.auth);
  const { Logout } = useAuthCall();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static">
      <Container >
        <Toolbar >
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BLOG APP
          </Typography>
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
              {/* MOBILE MENU ----------------------------------------- */}
              {pages?.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseNavMenu}
                  component={NavLink}
                  to={page.url}
                >
                  <Typography textAlign="center">{page.title}</Typography>
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
            BLOG APP
          </Typography>
          {/* MENU ---------------------------------- */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages?.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                component={NavLink}
                to={page.url}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          {/* ************************************************************ */}
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} >
                {currentUser?.image ? (
                  <Avatar
                    title={currentUser.first_name}
                    src={currentUser.image}
                  />
                ) : (
                  <Avatar src="https://media.istockphoto.com/id/1223671392/tr/vekt%C3%B6r/varsay%C4%B1lan-profil-resmi-avatar-foto%C4%9Fraf-yer-tutucusu-vekt%C3%B6r-%C3%A7izimi.jpg?s=170667a&w=0&k=20&c=wFPiJjl8-y44syqhCB1syK9KBqd-HH5gihASLfeI5cY=" />
                )}
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
              {currentUser
                ? settings.map((setting, index) =>
                    setting.title === "LOGOUT" ? (
                      <MenuItem key={index} onClick={handleCloseUserMenu}>
                        <Button onClick={Logout}>{setting.title}</Button>
                      </MenuItem>
                    ) : (
                      <MenuItem key={index} onClick={handleCloseUserMenu}>
                        <Button component={NavLink} to={setting.url}>
                          {setting.title}
                        </Button>
                      </MenuItem>
                    )
                  )
                : settingPublic.map((setting, index) => (
                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                      <Button component={NavLink} to={setting.url}>
                        {setting.title}
                      </Button>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
