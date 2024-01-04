import React, { useState } from "react";
import { Box } from "@mui/system";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FastForward } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Home from "./../../pages/Home";
import Menu from "./../../pages/Menu";
import About from "./../../pages/About";
import Contact from "./../../pages/Contact";
import "../../styles/HeaderStyle.css";
import logo from "./../../data/images/logo.svg";






const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // handle menu click

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //menu Drawer  

  //  Mobile responsive  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}> Home</Link>
        </li>
        <li>
          <Link to={"/menu"}> Menu</Link>
        </li>
        <li>
          <Link to={"/about"}> About</Link>
        </li>
        <li>
          <Link to={"/contact"}> Contact</Link>
        </li>
      </ul>
    </Box>
  );




//   start from here
 
  return (
    <>

    {/* MAIN MENU BAR */}

      <Box>
        <AppBar component={"nav"} sx={{ backgroundColor: "black" }}>
          <Toolbar>
            <img src={logo} alt="logo" height={'80'} width={'110'}></img>
          {/* <FoodBankIcon  /> */}
            <Typography
              variant="h5"
              color="gold"
              component="div"
              sx={{ flexGrow: 1 }}
            >
             
              My Resturent
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}> Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}> Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}> About</Link>
                </li>
                <li>
                  <Link to={"/contact"}> Contact</Link>
                </li>
              </ul>
            </Box>

            {/* small device menu icon */}

            <IconButton
              color="inherit"
              aria-level="open drawer"
              edge="start"
              sx={{ margin: "2", display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { sx: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box >
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
