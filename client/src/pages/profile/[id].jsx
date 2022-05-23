import React, { useEffect, useState } from "react";
import Info from "../../components/profile/Info";
import Posts from "../../components/profile/Posts";
import { useDispatch, useSelector } from "react-redux";
import { authState, userState } from "../../redux/store";
import Loading from "../../components/allResponseMessages/Loading";
import { getUserProfile } from "../../redux/actions/actionProfile";
import { useParams } from "react-router";
import { Box } from "@mui/system";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AppsIcon from "@mui/icons-material/Apps";
import { Button } from "@mui/material";
import PostsSaved from "../../components/profile/PostsSaved";
function Profile() {
  const profileUser = useSelector(userState);
  const auth = useSelector(authState);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [postSavedTap, setPostSavedTap] = useState(false);

  // Styles
  const ButtonStyle = {
    fontWeight: "600",
    fontSize: "16px",
    color: "#000",
    opacity: ".7",
    borderRadius: "0",
    margin: "0px 20px ",
  };
  const ButtonActive = {
    fontWeight: "600",
    color: "#2179cf",
    borderTop: "1px solid #000",
    borderRadius: "0",
    opacity: "1",
    margin: "0px 20px ",
  };
  // the Check only True => get All Profile Users
  useEffect(() => {
    if (profileUser._id.every((profileId) => profileId !== id)) {
      dispatch(getUserProfile({ users: profileUser.users, id, auth }));
    }
  }, [dispatch, id, auth, profileUser.users, profileUser._id]);

  return (
    <>
      <Info auth={auth} id={id} profileUser={profileUser} />
      {auth.user._id === id && (
        <Box
          display="flex"
          justifyContent="center"
          marginTop="30px"
          borderTop="1px solid #ddd"
        >
          <Button
            style={!postSavedTap ? ButtonActive : ButtonStyle}
            onClick={() => setPostSavedTap(false)}
          >
            Posts
            <AppsIcon style={{ fontSize: "17px" }} />
          </Button>
          <Button
            style={postSavedTap ? ButtonActive : ButtonStyle}
            onClick={() => setPostSavedTap(true)}
          >
            Saved
            <BookmarkIcon style={{ fontSize: "17px" }} />
          </Button>
        </Box>
      )}

      {!profileUser.loading ? (
        <>
          {!postSavedTap ? (
            <Posts auth={auth} profileUser={profileUser} id={id} />
          ) : (
            <PostsSaved auth={auth} />
          )}
        </>
      ) : (
        <Loading width="40px" />
      )}
    </>
  );
}

export default Profile;
