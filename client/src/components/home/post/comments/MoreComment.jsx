import React from "react";
import { Box } from "@mui/material";
import CoverModel from "../../../CoverModel";
import "../more/StylesMore.css";
function MoreComment({
  post,
  comment,
  auth,
  setMore,
  setIsEdit,
  handleShowEditContent,
  handleRemoveComment,
}) {
  // MY Post Function
  const MyPost = () => {
    return (
      <>
        <Box className="styledCard">
          <button
            className="styledButton delete_btn"
            onClick={handleRemoveComment}
          >
            Delete Comment
          </button>
        </Box>
        <Box className="styledCard">
          <button className="styledButton" onClick={handleShowEditContent}>
            Edit Comment
          </button>
        </Box>
      </>
    );
  };

  return (
    <Box onClick={() => setMore(false)}>
      <CoverModel>
        <Box
          className="styledCardApp"
          sx={{ width: { xs: "93vw", sm: "350px", md: "450px" } }}
        >
          <Box>
            {post.user._id === auth.user._id ? (
              comment.user._id === auth.user._id ? (
                MyPost()
              ) : (
                <Box className="styledCard">
                  <button
                    onClick={handleRemoveComment}
                    className="styledButton delete_btn"
                  >
                    Delete Comment
                  </button>
                </Box>
              )
            ) : (
              comment.user._id === auth.user._id && MyPost()
            )}

            <Box className="styledCard">
              <button onClick={() => setMore(false)} className="styledButton">
                Cancel
              </button>
            </Box>
          </Box>
        </Box>
      </CoverModel>
    </Box>
  );
}

export default MoreComment;
