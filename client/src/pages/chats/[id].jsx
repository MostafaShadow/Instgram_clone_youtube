import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import ChatsMenue from "../../components/chats/ChatsMenue";
import Chat from "../../components/chats/Chat";
import { ScrollHook } from "../../ScrollHook";

function chat() {
  const { hiddenScroll } = ScrollHook();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    hiddenScroll();
  }, [hiddenScroll]);
  return (
    <Grid
      sx={{
        border: "1px solid #ddd",
        borderRadius: "6px",
        backgroundColor: "#fff",
        height: "calc(100vh - 100px)",
        marginTop: "20px!important",
      }}
      container
    >
      <Grid item sx={{ display: { xs: "none", md: "block" } }} xs={0} md={4}>
        <ChatsMenue />
      </Grid>
      <Grid item xs={12} md={8} position="relative" height="100%">
        <Chat />
      </Grid>
    </Grid>
  );
}

export default chat;
