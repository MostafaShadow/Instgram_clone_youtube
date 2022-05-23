import React from "react";
import { Typography, Paper, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-write.png";
import FormInput from "./FormInput";
import cover from "../../assets/images/cover_1.jpg";
import LogicRegister from "./LogicRegister";
function RegisterComp() {
  const { inputs, values, handleChange, handleRegister } = LogicRegister();
  // Styles
  const styledLogo = {
    display: "block",
    objectFit: "containe",
    width: "150px",
    height: "100px",
    margin: "10px auto 0px",
  };
  const background = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap="10px"
    >
      <Box>
        <Paper
          variant="outlined"
          square
          sx={{
            maxWidth: "400px",
            margin: "10px auto",
            borderRadius: 1,
          }}
        >
          <Box>
            <img style={styledLogo} src={Logo} alt="logo" loading="lazy" />
          </Box>

          <form
            style={{ margin: "10px auto", width: "80%" }}
            onSubmit={handleRegister}
            autoComplete="on"
          >
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                messageError={input.messageError}
                {...input}
                value={values[input.name]}
                onChange={handleChange}
              />
            ))}

            <Button
              variant="contained"
              fullWidth
              type="submit"
              size="large"
              sx={{
                backgroundColor: "#2179cf !important",
                color: "#fff !important",
                margin: "20px 8px ",
              }}
            >
              Register
            </Button>
          </form>
        </Paper>
        <Paper
          variant="outlined"
          square
          sx={{
            maxWidth: "400px",
            margin: "10px auto",
            borderRadius: 1,
          }}
        >
          <Box
            display="flex"
            sx={{ padding: "20px" }}
            justifyContent="center"
            alignItems="center"
          >
            <Typography sx={{ margin: 1, fontSize: "18px" }} variant="h6">
              Have an account?
            </Typography>
            <Link to="/">
              <Typography
                variant="h6"
                sx={{
                  color: "rgb(33, 150, 243)",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Login
              </Typography>
            </Link>
          </Box>
        </Paper>
      </Box>
      <Box
        width="500px"
        height="600px"
        padding="20px"
        sx={{
          backgroundColor: "#fff",
          display: { xs: "none", md: "block" },
          boxShadow: "0 2px 6px 0 rgb(0 0 0 / 5%), 0 0 3px 0 rgb(0 0 0 / 10%)",
        }}
      >
        <img src={cover} style={background} alt="img" loading="lazy" />
      </Box>
    </Box>
  );
}

export default RegisterComp;
