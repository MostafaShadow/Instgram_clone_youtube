import { Box, Typography } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";

function NoOpenChat() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="calc(100vh - 40px)"
    >
      <Box
        rounded
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="130px"
        width="130px"
        borderRadius="50%"
        border="2px solid #292828"
      >
        <TelegramIcon style={{ fontSize: 70, color: "#292828" }} />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        marginTop="20px"
      >
        <Typography variant="h4">Your Messages</Typography>
        <Typography variant="h6" marginTop="10px">
          Send private photos and messages to a friend.
        </Typography>
      </Box>
    </Box>
  );
}

export default NoOpenChat;
