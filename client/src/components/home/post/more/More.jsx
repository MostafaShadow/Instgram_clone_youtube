import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GLOBALTYPES } from "../../../../redux/actions/constant";
import { Link, useNavigate } from "react-router-dom";
import { deletePost } from "../../../../redux/actions/actionPost";
import { BASE_URL } from "../../../../utils/config";
import CoverModel from "../../../CoverModel";
import { socketState } from "../../../../redux/store";
import "./StylesMore.css";
function More({ auth, post, setMore, showModelSharePost }) {
  // STates And Functions
  const { MODEL_POST } = GLOBALTYPES;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const socket = useSelector(socketState);
  // Handle Edit Post
  const handleEdit = () => {
    dispatch({ type: MODEL_POST, payload: { ...post, isEdit: true } });
    setMore(false);
  };

  // Handle Delete Post
  const handleDeletePost = async () => {
    if (window.confirm("Are you sure you want to delete this post")) {
      await dispatch(deletePost({ post, auth, socket }));
      navigate("/");
    }
    setMore(false);
  };
  // Handle Copy Post Link
  const handleCopyPostLink = () => {
    navigator.clipboard.writeText(`${BASE_URL}/post/${post._id}`);
    setMore(false);
  };

  return (
    <Box onClick={() => setMore(false)}>
      <CoverModel>
        <Box
          className="styledCardApp"
          sx={{ width: { xs: "93vw", sm: "350px", md: "450px" } }}
        >
          <Box>
            {post.user._id === auth.user._id && (
              <>
                <Box className="styledCard">
                  <button
                    onClick={handleDeletePost}
                    className="styledButton delete_btn"
                  >
                    Delete
                  </button>
                </Box>
                <Box className="styledCard">
                  <button className="styledButton " onClick={handleEdit}>
                    Edit Post
                  </button>
                </Box>
              </>
            )}

            <Link to={`/post/${post._id}`}>
              <Box className="styledCard">
                <button className="styledButton ">Go to post</button>
              </Box>
            </Link>
            <Box className="styledCard">
              <button className="styledButton" onClick={showModelSharePost}>
                Share to...
              </button>
            </Box>
            <Box className="styledCard">
              <button className="styledButton" onClick={handleCopyPostLink}>
                Copy Link
              </button>
            </Box>

            <Box className="styledCard">
              <button className="styledButton" onClick={() => setMore(false)}>
                Cancel
              </button>
            </Box>
          </Box>
        </Box>
      </CoverModel>
    </Box>
  );
}

export default More;
