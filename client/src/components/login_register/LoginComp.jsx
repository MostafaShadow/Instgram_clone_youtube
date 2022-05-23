import { Link } from "react-router-dom";
import { Typography, Paper, Button, Box } from "@mui/material";
import Logo from "../../assets/images/logo-write.png";
import FormInput from "./FormInput";
import cover from "../../assets/images/cover_2.jpg";
import LogicLogin from "./LogicLogin";

function LoginComp() {
  const { inputs, values, handleChange, handleLogin } = LogicLogin();

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
    >
      <Box>
        <Paper
          variant="outlined"
          square
          sx={{
            height: "500px",
            maxWidth: "400px",
            margin: "10px auto",
            borderRadius: 1,
            padding: "20px",
          }}
        >
          <Box>
            <img style={styledLogo} alt="logo" src={Logo} loading="lazy" />
          </Box>
          <form
            style={{ margin: "10px auto", width: "80%" }}
            action=""
            onSubmit={handleLogin}
            autoComplete="off"
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
              disabled={
                values.email.length < 6 && values.password.length < 6
                  ? true
                  : false
              }
              sx={
                values.email.length < 6 && values.password.length < 6
                  ? {
                      backgroundColor: "#b2dffc !important",
                      margin: "20px 8px ",
                    }
                  : {
                      backgroundColor: "#2179cf !important",
                      margin: "20px 8px ",
                    }
              }
            >
              Login
            </Button>
          </form>
          <Box sx={{ height: "50px" }}>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Frogot password?
            </Typography>
          </Box>
        </Paper>
        <Paper
          variant="outlined"
          square
          sx={{
            maxWidth: "400px",
            margin: "10px auto",
            borderRadius: 1,
            backgroundColor: "rgba(255, 255, 255, 0.11)",
          }}
        >
          <Box
            display="flex"
            sx={{ padding: "20px" }}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h6" sx={{ margin: 1, fontSize: "16px" }}>
              Don't have an account?
            </Typography>
            <Link to="/register">
              <Typography
                variant="h6"
                sx={{ color: "#2196f3", fontSize: "16px", fontWeight: "bold" }}
              >
                Register
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
          backgroundColor: "rgba(255, 255, 255, 0.11)",
          boxShadow: "0 2px 6px 0 rgb(0 0 0 / 5%), 0 0 3px 0 rgb(0 0 0 / 10%);",
          display: { xs: "none", md: "block" },
        }}
      >
        <img src={cover} style={background} alt="img" loading="lazy" />
      </Box>
    </Box>
  );
}

export default LoginComp;
