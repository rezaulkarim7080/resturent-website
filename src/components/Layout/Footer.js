import React from "react";
import { Box, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { fontSize } from "@mui/system";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          p: 3,
        }}
      >
        {/* foooter icons */}
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "gold",
              transform: "translateY(5px)",
              transition: "all .3s",
            },
          }}
        >
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}
        >
          All Right Reserved &copy; Rezaul Karim
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
