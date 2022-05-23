import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetAPIData } from "../../utils/fetchData";
import { authState, notificationsState } from "../../redux/store";
import { logout } from "../../redux/actions/actionAuth";
import { GLOBALTYPES } from "../../redux/actions/constant";
import { useLocation } from "react-router";
const LogicHeader = () => {
  const notifications = useSelector(notificationsState);
  const location = useLocation().pathname;
  const auth = useSelector(authState);
  const dispatch = useDispatch();
  const RESPONSEMESSAGE = GLOBALTYPES;
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isNotifications, setIsNotifications] = useState(false);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search for any user
  useEffect(() => {
    const handleSearch = async () => {
      try {
        if (search && auth.token) {
          setLoading(true);
          const { data } = await GetAPIData(
            `search?username=${search}`,
            auth.token
          );
          const getSearchData = data.users;
          setUsers(getSearchData);
          setLoading(false);
        }
      } catch (err) {
        dispatch({
          type: RESPONSEMESSAGE,
          payload: {
            error: err.response.data.msg,
          },
        });
      }
    };
    handleSearch();
  }, [search, auth.token, dispatch, RESPONSEMESSAGE]);
  // open user menue
  const handleOpenUserMenu = (e) => {
    e.stopPropagation();
    setAnchorElUser(e.currentTarget);
  };
  //close user menu
  const handleCloseUserMenu = () => {
    setAnchorElUser(false);
  };

  // Close search
  const handleCloseSearch = () => {
    setSearch("");
  };

  // Logout
  const handleLogout = () => {
    dispatch(logout());
  };
  return {
    handleOpenUserMenu,
    handleCloseUserMenu,
    setSearch,
    setIsNotifications,
    handleCloseSearch,
    handleLogout,
    loading,
    search,
    users,
    anchorElUser,
    location,
    notifications,
    isNotifications,
  };
};

export default LogicHeader;
