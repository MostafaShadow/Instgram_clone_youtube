import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function CoverModel({ children, backgroundCalling }) {
  // handle focus in Card
  const handleFocusInCard = (e) => {
    e.stopPropagation();
  };
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
      }}
      style={
        backgroundCalling ? backgroundCalling : { background: "#252525eb" }
      }
    >
      <Box
        sx={{ position: "absolute", top: "3px", right: "1px", zIndex: 999999 }}
      >
        <Tooltip title="Close" sx={{ zIndex: 9999 }}>
          <IconButton>
            <CloseIcon style={{ fontSize: "30px", color: "#ddd" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50% , -50%)",
          backgroundColor: !backgroundCalling && "#fff",
          borderRadius: "10px",
        }}
        onClick={handleFocusInCard}
      >
        {children}
      </Box>
    </Box>
  );
}

export default CoverModel;
