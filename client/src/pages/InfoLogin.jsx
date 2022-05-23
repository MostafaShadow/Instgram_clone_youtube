import React from "react";
import Logo from "../assets/images/logo-write.png";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function InfoLogin() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100vh"
      >
        <Box>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "200px", objectFit: "contain" }}
              loding="lazy"
            />
          </Link>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            OOPS .! You're not User
            <Link
              to="/"
              style={{
                marginLeft: "20px",
                color: "#2196f3",
                width: "fit-content",
              }}
            >
              Please Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default InfoLogin;
