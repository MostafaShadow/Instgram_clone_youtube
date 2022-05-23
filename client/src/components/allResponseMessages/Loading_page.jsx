import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/material";
function LoadingPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <InstagramIcon style={{ fontSize: "70px", color: "rgb(0 0 0 / 43%)" }} />
    </Box>
  );
}

export default LoadingPage;
