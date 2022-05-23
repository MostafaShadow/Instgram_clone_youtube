import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authState, chatsState, onlineState } from "../../redux/store";
import { GetAPIData } from "../../utils/fetchData";
import { GLOBALTYPES } from "../../redux/actions/constant";
import SearchIcon from "@mui/icons-material/Search";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import { getChats, openChatUser } from "../../redux/actions/actionChats";
import { useNavigate, useParams } from "react-router";
import UserChat from "./UserChat";
import Loading from "../allResponseMessages/Loading";
import { CHATS_TYPES } from "../../redux/actions/constant";
import { AvatarUser } from "../../utils/helper";
function ChatsMenue() {
  // States And Functions
  const { RESPONSEMESSAGE } = GLOBALTYPES;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(authState);
  const chats = useSelector(chatsState);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [noUserFound, setNoUserFound] = useState(false);
  const { id } = useParams();

  const { CHECK_ONLINE_OFFLINE } = CHATS_TYPES;
  const online = useSelector(onlineState);
  // Search User To Chats
  useEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async () => {
      if (search.length === 0) {
        setUsers([]);
        setNoUserFound(false);
        return;
      }
      try {
        setLoading(true);
        const { data } = await GetAPIData(
          `search?username=${search}`,
          auth.token
        );
        if (data.users.length === 0) {
          setUsers([]);
          setNoUserFound(true);
        } else {
          setNoUserFound(false);
          setUsers(data.users);
        }
        setLoading(false);
      } catch (err) {
        dispatch({
          type: RESPONSEMESSAGE,
          payload: {
            error: err.response.data.msg,
          },
        });
      }
    },
    [search, dispatch, RESPONSEMESSAGE, auth.token]
  );

  // Handle Get Chats
  useEffect(() => {
    if (chats.firstLoading) return;
    dispatch(getChats(auth));
  }, [auth, chats.firstLoading, dispatch]);

  // Check online user and added
  useEffect(() => {
    if (chats.firstLoading) {
      dispatch({ type: CHECK_ONLINE_OFFLINE, payload: online });
    }
  }, [CHECK_ONLINE_OFFLINE, chats.firstLoading, dispatch, online]);

  // Handle Open Caht User
  const handleOpenChat = (user) => {
    setSearch("");
    setUsers([]);
    dispatch(openChatUser({ user, chats }));
    dispatch({ type: CHECK_ONLINE_OFFLINE, payload: online });

    navigate(`/chats/${user._id}`);
  };

  return (
    <>
      <Box sx={{ borderRight: "1px solid #ddd", height: "100%" }}>
        <Box
          sx={{
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid #ddd",
            padding: "10px",
            gap: 1,
          }}
        >
          <Typography variant="h5">{auth.user.username}</Typography>
        </Box>

        <form>
          <Box
            sx={{
              height: "60px",
              borderBottom: "1px solid #ddd",
              padding: "10px",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              display: "flex",
            }}
          >
            <input
              style={{
                border: "none",
                outlineWidth: 0,
                backgroundColor: "inherit",
                fontSize: "16px",
                fontWeight: "100",
                flex: "1",
                ":hover": {
                  border: "none",
                },
              }}
              type="text"
              placeholder="Enter to Search ..."
              value={search}
              onChange={(e) => setSearch(e.target.value.replace(/ /g, ""))}
            />
            {loading ? <Loading width="24px" /> : <SearchIcon />}
          </Box>
        </form>

        <Box>
          {noUserFound && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              height="400px"
            >
              <SentimentSatisfiedIcon
                style={{ fontSize: "40px", color: "rgb(41, 40, 40)" }}
              />
              <Typography variant="h5" color="rgb(41, 40, 40)" marginTop="10px">
                user not found.
              </Typography>
            </Box>
          )}

          {users.length === 0 ? (
            <>
              {chats.chatsUsers.map((user) => (
                <Box key={user._id} onClick={() => handleOpenChat(user)}>
                  <UserChat
                    user={user}
                    hover
                    userMenue
                    active={id === user._id}
                    userOnline={user.online}
                  />
                </Box>
              ))}
            </>
          ) : (
            <Box height="calc(100vh - 230px)" sx={{ overflowY: "auto" }}>
              {users.map((user) => (
                <Box key={user._id} onClick={() => handleOpenChat(user)}>
                  <UserChat user={user} />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default ChatsMenue;
