import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import ChatsMenue from "../../components/chats/ChatsMenue";
import NoOpenChat from "../../components/chats/NoOpenChat";
import { ScrollHook } from "../../ScrollHook";
function chats() {
  const { hiddenScroll } = ScrollHook();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    hiddenScroll();
  }, [hiddenScroll]);
  return (
    <>
      <Grid
        sx={{
          marginTop: "20px!important",
          borderRadius: "6px",
          backgroundColor: "#fff",
          height: "calc(100vh - 100px)",
          overflow: "hidden",
          boxShadow: "0 2px 6px 0 rgb(0 0 0 / 5%), 0 0 3px 0 rgb(0 0 0 / 10%)",
        }}
        container
      >
        <Grid item xs={12} md={4}>
          <ChatsMenue />
        </Grid>
        <Grid item sx={{ display: { xs: "none", md: "block" } }} xs={0} md={8}>
          <NoOpenChat />
        </Grid>
      </Grid>
    </>
  );
}

export default chats;
