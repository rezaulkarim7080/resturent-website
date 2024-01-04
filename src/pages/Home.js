import React from "react";

import Menu from "../pages/Menu";
import Layout from "../components/Layout/Layout";
import { Box, Button, Link } from "@mui/material";
import banner from "../image/banner.jpeg";
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
      <Box className="home" style={{ backgroundImage: `url(${banner})` }}>
        <div className="headerContainer">
          <h1> Food Website</h1>
          <p>Best Food in Chittagong</p>

          <Link href={"/menu"}> <Button> Order Now </Button> 
           </Link>
        </div>
      </Box>
    </Layout>
  );
};

export default Home;
