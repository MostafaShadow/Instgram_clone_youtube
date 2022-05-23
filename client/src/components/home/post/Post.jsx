import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Comments from "../post/comments/Comments";
import InputComment from "../post/comments/InputComment";
import ShareModel from "./ShareModel";
import { BASE_URL } from "../../../utils/config";
import PostHeader from "./postCard/PostHeader";
import PostContent from "./postCard/PostContent";
import PostActivity from "./postCard/PostActivity";

function Post({ post }) {
  // Functions and States
  const [isShare, setIsShare] = useState(false);
  // Show Model Share Post
  const showModelSharePost = () => {
    setIsShare(!isShare);
  };

  return (
    <>
      <Box
        sx={{
          boxShadow: " 0 2px 6px 0 rgb(0 0 0 / 5%), 0 0 3px 0 rgb(0 0 0 / 5%)",
          border: "1px solid #0c0c0c17",
          borderRadius: "6px",
          marginBottom: "20px",
        }}
      >
        <PostHeader post={post} showModelSharePost={showModelSharePost} />
        <PostContent post={post} />
        <PostActivity post={post} showModelSharePost={showModelSharePost} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 10px",
          }}
        >
          <Box sx={{ marginLeft: "10px" }}>
            <Typography variant="h6" style={{ fontSize: "15px" }}>
              {post.likes.length} likes
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" style={{ fontSize: "15px" }}>
              {post.comments.length} Comments
            </Typography>
          </Box>
        </Box>
        <Box marginTop="20px">
          <Comments post={post} />
          <InputComment post={post} />
        </Box>
      </Box>

      {isShare && (
        <ShareModel
          setIsShare={setIsShare}
          url={`${BASE_URL}/post/${post._id}`}
        />
      )}
    </>
  );
}

export default Post;
