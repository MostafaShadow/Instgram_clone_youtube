import { Box, Button } from "@mui/material";
import React, { memo } from "react";
function LoadMoreButton({ postsCount, page, handleShowMorePost, loading }) {
  return (
    <>
      {postsCount < 9 * (page - 1)
        ? ""
        : !loading && (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="130px"
              paddingBottom="30px"
            >
              <Button variant="outlined" onClick={handleShowMorePost}>
                Load More
              </Button>
            </Box>
          )}
    </>
  );
}

export default memo(LoadMoreButton);
