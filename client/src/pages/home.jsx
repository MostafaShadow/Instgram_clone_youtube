import React, { lazy, Suspense, memo, useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/actionPost";
import { authState } from "../redux/store";
import Loading from "../components/allResponseMessages/Loading";

const SuggestionUser = lazy(() =>
  import("../components/suggestionUser/SuggestionUser")
);
const Posts = lazy(() => import("../components/home/Posts"));
const PostBox = lazy(() => import("../components/home/post/PostBox"));
function Home() {
  const dispatch = useDispatch();
  const auth = useSelector(authState);
  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token));
    }
  }, [dispatch, auth.token]);

  return (
    <div style={{ padding: "10px 0px 70px" }}>
      <Suspense fallback={<Loading />}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7} lg={8}>
            <PostBox />
            <Posts />
          </Grid>
          <Grid
            item
            md={5}
            lg={4}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <SuggestionUser />
            <Grid />
          </Grid>
        </Grid>
      </Suspense>
    </div>
  );
}

export default memo(Home);
