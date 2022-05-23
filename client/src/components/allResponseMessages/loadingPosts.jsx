import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Stack, Box } from "@mui/material";

function LoadingPosts() {
  return (
    <Stack spacing={2} top marginTop="20px">
      <Box display="flex" gap="20px">
        <Skeleton variant="circular" width={70} height={70} />
        <Stack justifyContent="center">
          <Skeleton variant="text" width={200} height={20} />
          <Skeleton variant="text" width={200} height={20} />
        </Stack>
      </Box>
      <Skeleton variant="rectangular" height={400} />
      <Skeleton variant="rectangular" height={50} />
    </Stack>
  );
}

export default LoadingPosts;
