/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from "react";
import { Box, Link, Typography } from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import UserCard from "../UserCard";
import Loading from "../allResponseMessages/Loading";
import { authState, stateSuggestion } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { handleGetSuggestion } from "../../redux/actions/actionSuggestion";
function SuggestionUser() {
  // States And Functions
  const dispatch = useDispatch();
  const auth = useSelector(authState);
  const suggestionUser = useSelector(stateSuggestion);
  useEffect(() => {
    dispatch(handleGetSuggestion(auth));
  }, [auth, dispatch]);
  return (
    <Box
      sx={{
        padding: "10px",
        marginTop: "12px",
        background: "#fff",
        borderRadius: "4px",
        boxShadow: " 0 2px 6px 0 rgb(0 0 0 / 5%), 0 0 3px 0 rgb(0 0 0 / 5%)",
        border: "1px solid #0c0c0c17",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          gap: "10px",
        }}
      >
        <Typography variant="h5" color="#211f1f91" fontWeight="600">
          Suggestion For You
        </Typography>
        <CelebrationIcon style={{ color: "#211f1f91" }} />
      </Box>
      <Box marginTop="20px">
        {suggestionUser.loading ? (
          <Loading width="30px" />
        ) : (
          suggestionUser.users.map((user) => (
            <UserCard key={user._id} userData={user} />
          ))
        )}
      </Box>
      <Box
        sx={{
          borderTop: "1px solid #ddd",
          margin: "10px 0px 10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="caption"
          fontSize="15px"
          marginTop="10px"
          color="#897f7f"
        >
          Welcome To Instagram Clone
        </Typography>
        <Typography variant="caption" fontSize="15px" color="#897f7f">
          &copy; 2022 By{" "}
          <Link
            href="https://www.youtube.com/channel/UC4Hz-ntDHefICIBkutpadBA"
            target="_blank"
          >
            Shadow Coding
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default SuggestionUser;
