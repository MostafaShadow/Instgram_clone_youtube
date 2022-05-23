import React from "react";
import { Typography, TextField, FormControl } from "@mui/material";
function FormInput({ messageError, ...props }) {
  const styledError = {
    color: "#da5252",
    fontSize: "16px",
    whiteSpace: "nowrap",
  };
  return (
    <>
      <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
        <TextField
          required
          variant="outlined"
          {...props}
          autoComplete="on"
          sx={{ color: "#fff !important" }}
        />
        <Typography style={styledError} variant="h6">
          {messageError}
        </Typography>
      </FormControl>
    </>
  );
}

export default FormInput;
